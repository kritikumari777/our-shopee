const ButtonComp = ({
  label,
  onClick,
  className = '',
  disabled = false
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-sm ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  )
}

export default ButtonComp