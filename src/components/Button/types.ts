export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean | undefined;//Explicar o que o disabled e´
}