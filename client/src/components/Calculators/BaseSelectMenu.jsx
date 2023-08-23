function BaseSelectMenu({ value, onChange, items, title, divClass, formClass }) {
    return (
        <div className={divClass}>
            <label className="text-[13px]">{title}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)} className={formClass}>
                {
                    items.map(({ key, value }) => {
                        return (<option key={key} className="capitalize" value={key}>{value}</option>)
                    })
                }
            </select>
        </div>
    );
}

export default BaseSelectMenu;