import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-right: 194px;
    align-items: flex-start;
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 115px;
`;

export const ImageInsert = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 459px;
    height: 602px;
    background: #F0F0F0;
    border-radius: 15px;
    flex-shrink: 0;
    overflow: hidden;
`;

export const PreviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const LineImage = styled.img`
    margin: -50px 159px 68px 159px;
    width: 1.5px;
    align-self: stretch;
`;

export const TotalFrame = styled.div`
    width: 285px;
    border: 1px solid #E0E0E0;
    padding: 27px 33px;
    border-radius: 25px;
    margin-top: 37px;
`;

export const NewFrame = styled.div`
    width: 100%;
`;

export const Select = styled.div`
    width: 100%;
`;

export const NewInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Title = styled.span`
    color: #1A1A1A;
    font-size: 24px;
    font-family: Pretendard;
    font-weight: 400;
    width: 100%;
    margin-bottom: 9px;
    display: block;
`;

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

export const Label = styled.p`
    font-size: 14px;
    font-family: Pretendard;
    font-weight: 400;
    color: #6C6C6C;
    margin: 0;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border: 1px #6C6C6C solid;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 12px;
    font-family: Pretendard;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 15px;
`;

export const ToggleGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-bottom: 15px;
`;

export const ColorGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 15px;
`;

export const ToggleButton = styled.div`
    flex: 1;
    padding: 6px 20px;
    border-radius: 5px;
    font-size: 12px;
    font-family: Pretendard;
    cursor: pointer;
    background: ${props => props.$selected ? "#DFDFDF" : "#F2F2F2"};
    color: #333333;
    text-align: center;
    white-space: nowrap;
`;

export const SubmitButton = styled.div`
    width: 100%;
    height: 40px;
    background: #F0F0F0;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-family: Pretendard;
    cursor: pointer;
`;