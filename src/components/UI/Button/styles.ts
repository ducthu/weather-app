import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

export const Container = styled.button`
  ${tw`text-white text-base font-bold text-center bg-black rounded flex py-4 px-10 focus:outline-none cursor-pointer`}
  &:disabled {
    ${tw`opacity-75 cursor-not-allowed`}
  }
  &:hover:not(:disabled) {
    ${tw`bg-gray-800 border-transparent shadow-xs`}
  }
  &:active:not(:disabled) {
    ${tw`bg-gray-900 border-transparent shadow-xs`}
  }
`;
