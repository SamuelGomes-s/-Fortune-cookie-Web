import { ActionBtn } from "./styles";

export default function Button({ children, color, onClick }) {
    return (
        <ActionBtn bgColor={color} onClick={onClick}>
            {children}
        </ActionBtn>
    )
}