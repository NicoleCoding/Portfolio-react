import PropTypes from 'prop-types';

export default function Input({ label, type = "text", name, value, onChange, placeholder, ...props}) {
    return (
        <div className="max-w-md mx-auto p-2">
            {label && <label className="text-gray-700 text-sm font-bold max-w-md mx-auto" htmlFor={name}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                {...props}
            />
        </div>
    )

}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}