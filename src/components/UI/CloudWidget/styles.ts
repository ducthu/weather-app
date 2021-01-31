import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Container = styled.div.attrs({
    classname: ""
})`
    ${tw`rounded shadow-md my-5 p-5`}
`;