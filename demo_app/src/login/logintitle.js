import { Button } from "antd";

export const LoginTitle = ({message, handleClick}) => {
    return (
        <div className="set_padding">
            <h1 style={{ color: "white" }}>
                {message.HEADER_TITLE}
            </h1>
            <p style={{width: "15em"}}>
                {message.PARAGRAPH_TITLE}
            </p>
            <Button type="primary" className="but_style" onClick={()=>handleClick()}>
                {message.BUTTON_NAME}
            </Button>
        </div>
    )
}