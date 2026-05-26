const Button = ({ buttonName, onClick, ...props }) => (
    <div onClick={onClick} {...props}>
        {buttonName}
    </div>
);


export default Button;

//언제든 재사용하기 위해
//함수로 Button 틀을 만들어 놓음.