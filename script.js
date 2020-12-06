(
    function Handle(win,doc) {
        const criacao=()=>{
            let div=doc.createElement('div')
            div.classList.add('a')
            html.div_container.appendChild(div)
        }
        function limpar(e) {
            e.forEach(v=>{
                v.classList.remove('r')
            })
        }
        function trocarfoto(e,r) {
            e.setAttribute('src',`./assets/${r}.jpg`)
        }
        
        
        function handletroca(e) {
            
            html.arr.forEach((val,ind,arr)=>{
                criacao()
                function real(){
                    let re =+ ind;
                    let div=doc.querySelectorAll('.a')
                    trocarfoto(html.img_back,re)
                    div.forEach((e,i,r)=>{
                        limpar(div)
                        r[re].classList.add('r')
                    })
                }
                setTimeout(real,3000*ind)
            })
        }
        const html={
            img_back:document.querySelector('.img-back'),
            arr:[1,2,3,4],
            div_container:document.querySelector('.column-row')
        }
        handletroca(html.img_back)
    }
)(window,document)