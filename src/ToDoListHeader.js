const Header = ({ toDo, handleFilter, sortTodo,language }) => {
    const todoLength = toDo.length;
    return (
        <div className="header">
            {language ==='vn' && 'Bạn có'}{language ==='en' && 'You have'} {todoLength} {language ==='vn' && 'nhiệm vụ còn lại!'}{language ==='en' && 'tasks left!'} 
            <div className="header__right">

            <select onChange={handleFilter}>
                <option value="all">{language ==='vn' && 'Tất cả nhiệm vụ'}{language ==='en' && 'All items'} </option>
                <option value="true">{language ==='vn' && 'Hoàn thành'}{language ==='en' && 'Done'}</option>
                <option value="">{language ==='vn' && 'Chưa hoàn thành'}{language ==='en' && 'Not finished'}</option>
            </select>
            <select onChange={sortTodo}>
                <option value="all">{language ==='vn' && 'Sắp xếp'}{language ==='en' && 'Sort by'}</option>
                <option value="ascending">{language ==='vn' && 'Tăng dần'}{language ==='en' && 'Ascending'}</option>
                <option value="descending">{language ==='vn' && 'Giảm dần'}{language ==='en' && 'Descending'}</option>
            </select>
            </div>
        </div>
    );
};

export default Header;
