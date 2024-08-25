import React from 'react';
import { useEffect, useRef, useState } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownList,
  DropdownItemWrapper,
  DropdownItemImage,
  ChevronIcon,
} from './styles';

import { 
  DropdownItem, 
  DropdownProps 
} from '../../../interfaces/ui';

const Dropdown = ({
  id,
  title = 'Select',
  data,
  position = 'bottom-left',
  hasImage,
  style,
  selectedId,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  );

  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect && onSelect(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        id={id}
        aria-label='Toggle dropdown'
        aria-haspopup='true'
        aria-expanded={isOpen}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        customStyle={style}
      >
        <span>{selectedItem?.name || title}</span>
        <ChevronIcon isOpen={isOpen} />
      </DropdownButton>

      {isOpen && (
        <DropdownMenu position={position}>
          <DropdownList aria-labelledby={id} aria-orientation='vertical'>
            {data?.map((item) => (
              <DropdownItemWrapper
                key={item.id}
                onClick={() => handleChange(item)}
                isSelected={selectedItem?.id === item.id}
              >
                {hasImage && <DropdownItemImage src={item.imageUrl} alt='image' />}
                <span>{item.name}</span>
              </DropdownItemWrapper>
            ))}
          </DropdownList>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

