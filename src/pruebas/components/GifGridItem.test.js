import { React } from "react";
import { render } from "@testing-library/react";
import GifGridItem from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe('Pruebas de GifGridItem',()=>{

    const title = 'Un titulo'
    const url ="https://UnaLiga.com/archivo.jpg"

    const wrapper = shallow(<GifGridItem title={title} url={url}/>)


    test('Prueba de snapshot',()=>{
        expect(wrapper).toMatchSnapshot();
    })

    test('Leyendo el titulo',()=>{
        const p = wrapper.find('p').text();
        expect(p.trim()).toBe(title)
    })

    test('Leyendo la imagen',()=>{
        const src = wrapper.find('img').prop('src');
        const alt = wrapper.find('img').prop('alt');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe tener la clase de card',()=>{
        const div = wrapper.find('div')

        expect(div.hasClass('card')).toBe(true);

    })

})