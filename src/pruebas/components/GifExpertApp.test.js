import { shallow } from "enzyme";
import { React } from "react";
import GifExpertApp from "../../components/GifExpertApp";

describe('Pruebas de GifExpertApp',()=>{

    test('Prueba con el snapshot',()=>{
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
    })

    test('Prueba mandando categorias',()=>{
        const categorias = ['One punch','Two punch']

        
        const wrapper = shallow(<GifExpertApp defaultCategorias={categorias} />)
        expect(wrapper.find('GifGrid').length).toBe(categorias.length)
    })
})