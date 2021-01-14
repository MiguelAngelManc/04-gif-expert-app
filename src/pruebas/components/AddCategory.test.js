import  AddCategory  from "../../components/AddCategory";
import { shallow } from "enzyme";

describe('Pruebas de AddCategory',()=>{

    const setCategorias = jest.fn();
    let wrapper = shallow(<AddCategory setCategorias={setCategorias}/>)

    beforeEach(()=>{
        wrapper = shallow(<AddCategory setCategorias={setCategorias}/>)
        jest.clearAllMocks();
    })

    test('Snapshot de AddCategory',()=>{
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar el valor del input', () =>{
        const input = wrapper.find('input');
        const value = "Hola mundo"
        input.simulate('change', {target:{value}})

    })

    test('No debe poster la informacion con submit',()=>{

        const form = wrapper.find('form')
        form.simulate('submit',{ preventDefault(){}})

        expect(setCategorias).not.toHaveBeenCalled();

    })

    test('Debe llamar el setCategorias y limpiar la caja de texto',()=>{
        // Simular inputChange
        const input = wrapper.find('input')
        const value = "Hola mundo"
        input.simulate('change',{target:{value}})

        // Simular submit
        const form = wrapper.find('form')
        form.simulate('submit', {preventDefault(){}})

        // Checar la funcion
        expect(setCategorias).toHaveBeenCalled();
        expect(setCategorias).toHaveBeenCalledTimes(1);
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));

        
        // Checar que se vacie el input
        expect(input.prop('value')).toBe('')
    })

})