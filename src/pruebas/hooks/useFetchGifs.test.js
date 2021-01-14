import { React } from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas de useFetchGifs',()=>{


    test('Debe retornar el estado inicial', async()=>{
        const categoria = 'One punch'
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs(categoria))
        const {data,loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([])
        expect(loading).toBe(true);

    })

    test('Debe tener datos despues de esperar', async() =>{
        const categoria = 'One punch'
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs(categoria))
        
        await waitForNextUpdate();
        const {data,loading} = result.current;

        expect(data.length).toEqual(10)
        expect(loading).toBe(false);


    })


})