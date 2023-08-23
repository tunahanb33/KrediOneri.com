function BaseTextInput({ value, onChange, title, textInpDivClasses, textInpFormClasses, indicator }) {
    return (
        <div className={textInpDivClasses}>
            <label className="text-[13px]">{title}</label>
            <label className="relative w-full flex justify-center items-center">
                <input value={value} onChange={onChange} placeholder="0" className={textInpFormClasses} type="text" />
                <span className="absolute right-3">{indicator}</span>
            </label>
        </div>
    );
}

export default BaseTextInput;