const r=(s,{onResize:n,options:o})=>{const e=new ResizeObserver(n);return e.observe(s,o),{destroy(){e.unobserve(s),e.disconnect()}}};export{r};
