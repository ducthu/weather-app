import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Container = styled.div`
    ${tw`w-full text-center rounded shadow-md border-opacity-25 border-2 px-2 py-5 cursor-pointer`}
`;

export const Img = styled.img`
    ${tw`mx-auto`}
    &{
        height: 100px;
        width: 100px;
    }
`;