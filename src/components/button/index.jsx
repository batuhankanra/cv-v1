import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types"

export default  function Button({children,as,variant}){
    return createElement(as,{
        type:'button',
        className:classNames('rounded-full h-9 flex items-center justify-center  px-4 font-bold transition-all hover:opacity-70 ',{
            "bg-[#38002c] text-[#5cffff]  ":variant==='dark',
            "bg-[#5cffff] text-[#38002c] ":variant==='white',
        })
    },children)
}


Button.propTypes={
    as:PropTypes.any,
    variant:PropTypes.oneOf(['dark','white'])
}
Button.defaultProps={
    as:'button',
    variant:'dark'
}