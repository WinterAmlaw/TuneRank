import styled, { css } from 'styled-components';
import { GoChevronDown } from 'react-icons/go';
import { DropdownProps } from '../../../interfaces/dropdown';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button<{ customStyle?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 10px 16px;
  background-color: #3b82f6;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  ${(props) => props.customStyle && css`${props.customStyle}`}
`;

export const ChevronIcon = styled(GoChevronDown)<{ isOpen: boolean }>`
  transition: transform 0.5s ease-in-out;
  ${(props) => props.isOpen && css`
    transform: rotate(180deg);
  `}
`;

export const DropdownMenu = styled.div<{ position: DropdownProps['position'] }>`
  position: absolute;
  background-color: #f3f4f6;
  max-width: 200px;
  max-height: 200px;
  overflow-y: auto;
  padding: 8px 0;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;

  ${(props) =>
    props.position === 'bottom-right' && css`
      top: 100%;
      right: 0;
      margin-top: 8px;
    `}
  ${(props) =>
    props.position === 'bottom-left' && css`
      top: 100%;
      left: 0;
      margin-top: 8px;
    `}
  ${(props) =>
    props.position === 'top-right' && css`
      bottom: 100%;
      right: 0;
      margin-bottom: 8px;
    `}
  ${(props) =>
    props.position === 'top-left' && css`
      bottom: 100%;
      left: 0;
      margin-bottom: 8px;
    `}
`;

export const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const DropdownItemWrapper = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  ${(props) =>
    props.isSelected
      ? css`
          background-color: #e5e7eb;
        `
      : css`
          &:hover {
            background-color: #f1f5f9;
          }
        `}
`;

export const DropdownItemImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: #9ca3af;
  object-fit: cover;
`;
