import styled from 'styled-components';
import { m } from 'framer-motion';

export const Wrapper = styled(m.div)`
    width: 100%;
    color: ${({ theme }) => theme.palette.text.secondary};
    display: flex;
    padding: 12px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    background: rgba(255, 255, 255, 0.07);
    box-shadow: 0 4px 65px 0 rgba(90, 90, 90, 0.2);

    flex-shrink: 0;
    flex-grow: 0;
    max-height: 269px;
    font-family:
        GTAmerica Standard,
        sans-serif;

    &:hover {
        .hover-target {
            opacity: 0.2;
        }
    }
`;

export const LeftContent = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    flex-shrink: 0;
`;

export const SquadIconWrapper = styled.div<{ $colour: string; $colour1: string; $colour2: string }>`
    border-radius: 100%;
    flex-shrink: 0;
    display: flex;
    width: 32px;
    height: 32px;
    background: ${({ $colour, $colour1, $colour2 }) =>
        ` linear-gradient(67deg, ${$colour}, ${$colour1} 12%, ${$colour2}) 6%`};
    align-items: center;
    justify-content: center;

    svg {
        width: 22px;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.26px;
    span {
        color: #fff;
    }
    p {
        font-weight: 600;
    }
`;

export const EarningsWrapper = styled.div`
    display: flex;
    justify-self: flex-end;
    white-space: pre-wrap;
    letter-spacing: -0.32px;
    flex-shrink: 0;
    font-weight: 600;
    font-size: 16px;
`;

export const ListLabel = styled.div`
    color: #fff;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const HoverWrapper = styled(m.div)`
    position: absolute;
    inset: 0;
    z-index: 4;
    background-color: rgba(255, 255, 255, 0.1);
`;

export const FlexButton = styled(m.button)`
    display: flex;
    height: 31px;
    padding: 8px 5px 8px 18px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 158.799px;
    background: linear-gradient(0deg, #c9eb00 0%, #c9eb00 100%), linear-gradient(180deg, #755cff 0%, #2946d9 100%),
        linear-gradient(180deg, #ff84a4 0%, #d92958 100%);

    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    color: #000;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;

    &:hover {
        box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.4);
    }
`;

export const GemPill = styled.div`
    border-radius: 60px;
    background: #000;

    display: flex;
    height: 20px;
    padding: 7px 5px 7px 8px;
    align-items: center;
    gap: 4px;

    color: #fff;
    font-size: 10px;
    font-weight: 600;
    line-height: normal;
`;

export const GemImage = styled.img`
    width: 11px;
`;
