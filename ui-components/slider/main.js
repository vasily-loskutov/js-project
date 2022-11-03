const rangeSlider = document.getElementById('range-slider');

if(rangeSlider){
    noUiSlider.create(rangeSlider, {
        start: [0, 100],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
    const input1 = document.getElementById('input-1');
    const input2 = document.getElementById('input-2');
    const inputs = [input1,input2]
    rangeSlider.noUiSlider.on('update',function(values,handle){
           inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i,value)=>{
        let arr = [null,null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr)
    }
    inputs.forEach((el,index)=>{
        el.addEventListener('change',(event)=>{
            setRangeSlider(index,event.currentTarget.value);
        })
    })
}
