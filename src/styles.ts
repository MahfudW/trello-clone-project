import styled from "styled-components"

export const WadahAplikasi = styled.div`
    align-items: flex-start;
    background-color: #E97777 ;
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 20px;
    width: 100%;
`

interface PropsPratinjauWadahBergeser {
    terSembunyikah?: boolean;
    tinJauankah?: boolean
};

export const PratinjauWadahBergeser = styled.div<PropsPratinjauWadahBergeser>`
    transform: ${(props) => props.tinJauankah ? "rotate(5deg)" : undefined};
    opacity: ${(props) => (props.terSembunyikah ? 0 : 1)};
`

export const WadahKolom = styled(PratinjauWadahBergeser)`
    background-color: #FF9F9F;
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
`

export const JudulKolom = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`

export const WadahKartu = styled(PratinjauWadahBergeser)`
    background-color: #FCDDB0;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #FF9F9F 0px 1px 0px 0px;
`

type TombolPropsTambahSesuatu = {
    gelap?: boolean;
}

export const TombolTambahSesuatu = styled.button<TombolPropsTambahSesuatu>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    color: ${(props) => (props.gelap ? "#000" : "#fff")};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;
    &:hover {
        background-color: #ffffff52;
    };
`

export const WadahTambahForm = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`

export const TombolTambahForm = styled.button`
    background-color: #5aac44;
    border-radius: 3px;
    border: none;
    box-shadow: none;
    padding: 6px 12px;
    text-align: Center;
`

export const InputTambahSesuatu = styled.input`
    border-radius: 3px;
    border: none;
    box-shadow: #091e4240 0px 1px 0px 0px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
`

export const LapisanKustomWadahGeser = styled.div`
    height: 100%;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`

type PropsPembungkusTinjauanGeser = {
    position: {
        x: number
        y: number
    };
};

export const PembungkusTinjauanGeser = styled.div.attrs<PropsPembungkusTinjauanGeser>(
    ({position: {x, y} }) => ({
        style: {
            transform: `translate(${x}px, ${y}px)`
        }
    })
)<PropsPembungkusTinjauanGeser>``