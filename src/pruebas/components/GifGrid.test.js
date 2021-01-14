import { React } from "react";
import { render } from "@testing-library/react";
import GifGrid from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');


describe('Tests de GifGrid',()=>{

    const categoria = "One punch"
    

    test('Snapshot de GifGrid',()=>{

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true,
        })

        const wrapper = shallow(<GifGrid categoria={categoria} />)

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar items cuando carga',()=>{

        const mockData = [{
            id: 'ABC',
            url: 'https://blablablalba',
            title: 'Titulo'
        }]

        useFetchGifs.mockReturnValue({
            data:mockData,
            loading:false,
        })

        const wrapper = shallow(<GifGrid categoria={categoria} />)
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(mockData.length)
    })

})