

const Header = ({isDarkMode,setIsDarkMode}) => {
    
    return (
    <header 
    className="d-flex justify-content-between 
    align-items-center border p-4 py-2 rounded-1">
        <h1>State</h1>
        

        <div className="d-flex gap-3">
            <label>Koyu Mod</label>
        <input 
            checked={isDarkMode}
            onChange={(event) => {
             setIsDarkMode(event.target.checked);
            }}
            className="form-check-input" 
            type="checkbox" 
        />
        </div>
    </header>
  );
};

export default Header;