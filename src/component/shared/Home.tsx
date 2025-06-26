import { useEffect, useState } from "react";
import { IUser, UserPageEnum } from "../user/User.type"
import { IBook, BookPageEnum } from "../book/Book.type";
import { ILoan, LoanPageEnum } from "../loan/Loan.type";
import { ICategory,CategoryPageEnum } from "../category/Category.type";
import "./Home.style.css"

import UserList from "../user/UserList";
import AddUser from "../user/AddUser";
import EditUser from "../user/EditUser";

import BookList from "../book/BookList";
import AddBook from "../book/AddBook";
import EditBook from "../book/EditBook";

import AddLoan from "../loan/AddLoan";
import EditLoan from "../loan/EditLoan";
import LoanList from "../loan/LoanList";

import AddCategory from "../category/AddCategory";
import EditCategory from "../category/EditCategory";
import CategoryList from "../category/CategoryList";
const Home = () => {
    const [activeTab, setActiveTab] = useState<'books' | 'users' | 'loans' | 'categories'>('books');

    const [userList, setUserList] = useState<IUser[]>([]);
    const [userPage, setUserPage] = useState<UserPageEnum>(UserPageEnum.list);
    const [dataToEditUser, setDataToEditUser] = useState<IUser | null>(null);

    const [bookList, setBookList] = useState<IBook[]>([]);
    const [bookPage, setBookPage] = useState<BookPageEnum>(BookPageEnum.list);
    const [dataToEditBook, setDataToEditBook] = useState<IBook | null>(null);

    const [loanList, setLoanList] = useState<ILoan[]>([]);
    const [loanPage, setLoanPage] = useState<LoanPageEnum>(LoanPageEnum.list);
    const [dataToEditLoan, setDataToEditLoan] = useState<ILoan | null>(null);

    const [categoryList, setCategoryList] = useState<ICategory[]>([]);
    const [categoryPage, setCategoryPage] = useState<CategoryPageEnum>(CategoryPageEnum.list);
    const [dataToEditCategory, setDataToEditCategory] = useState<ICategory | null>(null);
    useEffect(() => {
        const users = localStorage.getItem("UserList");
        if (users) {
            _setUserList(JSON.parse(users));
        }

        const books = localStorage.getItem("BookList");
        if (books) {
            _setBookList(JSON.parse(books));
        }

        const loans = localStorage.getItem("LoanList");
        if (loans) {
            _setLoanList(JSON.parse(loans));
        }

        const categories = localStorage.getItem("CategoryList");
        if (categories) {
            _setCategoryList(JSON.parse(categories));
        }

    }, []);

    //USER
    const _setUserList = (list: IUser[]) => {
        setUserList(list);
        localStorage.setItem("UserList", JSON.stringify(list));
    };

    const addUser = (data: IUser) => {
        _setUserList([...userList, data]);
        setUserPage(UserPageEnum.list);
    };

    const deleteUser = (data: IUser) => {
        const updatedList = userList.filter(user => user.id !== data.id);
        _setUserList(updatedList);
    };

    const editUserData = (data: IUser) => {
        setDataToEditUser(data);
        setUserPage(UserPageEnum.edit);
    };

    const updateUserData = (data: IUser) => {
        const updatedList = userList.map(user => 
            user.id === data.id ? data : user
        );
        _setUserList(updatedList);
        setUserPage(UserPageEnum.list);
    };

    //BOOKS

      const _setBookList = (list: IBook[]) => {
        setBookList(list);
        localStorage.setItem("BookList", JSON.stringify(list));
    };

    const addBook = (data: IBook) => {
        _setBookList([...bookList, data]);
        setBookPage(BookPageEnum.list);
    };

    const deleteBook = (data: IBook) => {
        const updatedList = bookList.filter(book => book.id !== data.id);
        _setBookList(updatedList);
    };

    const editBookData = (data: IBook) => {
        setDataToEditBook(data);
        setBookPage(BookPageEnum.edit);
    };

    const updateBookData = (data: IBook) => {
        const updatedList = bookList.map(book => 
            book.id === data.id ? data : book
        );
        _setBookList(updatedList);
        setBookPage(BookPageEnum.list);
    };

    //LOAN
    const _setLoanList = (list: ILoan[]) => {
        setLoanList(list);
        localStorage.setItem("LoanList", JSON.stringify(list));
    };

    const addLoan = (data: ILoan) => {
        const updatedBooks = bookList.map(book => 
            book.id === data.book.id ? { ...book, disponivel: false } : book
        );
        _setBookList(updatedBooks);
        _setLoanList([...loanList, data]);
        setLoanPage(LoanPageEnum.list);
    };

    const deleteLoan = (data: ILoan) => {
        if (!data.returned) {
            const updatedBooks = bookList.map(book => 
                book.id === data.book.id ? { ...book, disponivel: true } : book
            );
            _setBookList(updatedBooks);
        }
        
        const updatedList = loanList.filter(loan => loan.id !== data.id);
        _setLoanList(updatedList);
    };

    const editLoanData = (data: ILoan) => {
    setDataToEditLoan(data);
    setLoanPage(LoanPageEnum.edit);
    };

    const updateLoanData = (data: ILoan) => {
        const updatedList = loanList.map(loan => 
            loan.id === data.id ? data : loan
        );
        _setLoanList(updatedList);
        setLoanPage(LoanPageEnum.list);
    };

    const returnLoan = (data: ILoan) => {
        const updatedBooks = bookList.map(book => 
            book.id === data.book.id ? { ...book, disponivel: true } : book
        );
        _setBookList(updatedBooks);
        
        const updatedLoans = loanList.map(loan => 
            loan.id === data.id ? { ...loan, returned: true } : loan
        );
        _setLoanList(updatedLoans);
    };

    //CATEGORY 
    const _setCategoryList = (list: ICategory[]) => {
    setCategoryList(list);
    localStorage.setItem("CategoryList", JSON.stringify(list));
    };

    const addCategory = (data: ICategory) => {
        _setCategoryList([...categoryList, data]);
        setCategoryPage(CategoryPageEnum.list);
    };

    const deleteCategory = (data: ICategory) => {
        const updatedList = categoryList.filter(category => category.id !== data.id);
        _setCategoryList(updatedList);
    };

    const editCategoryData = (data: ICategory) => {
        setDataToEditCategory(data);
        setCategoryPage(CategoryPageEnum.edit);
    };

    const updateCategoryData = (data: ICategory) => {
        const updatedList = categoryList.map(category => 
            category.id === data.id ? data : category
        );
        _setCategoryList(updatedList);
        setCategoryPage(CategoryPageEnum.list);
    };
    return(
    <>
        <article className="article-header">
            <header>
                <h1>Sistema de Empréstimo de Livros</h1>
            </header>

        </article>
        <nav className="tab-navigation">
            <button 
                className={activeTab === 'books' ? 'active' : ''}
                onClick={() => setActiveTab('books')}> Livros </button>
            <button 
                className={activeTab === 'users' ? 'active' : ''} onClick={() => setActiveTab('users')}> Usuários </button>
            <button 
                className={activeTab === 'loans' ? 'active' : ''} onClick={() => setActiveTab('loans')}> Empréstimos </button>
            <button 
                className={activeTab === 'categories' ? 'active' : ''} onClick={() => setActiveTab('categories')}> Categorias </button>
        </nav>

        {/*BOOKS */}

        {activeTab === 'books' && (
            <>
                {bookPage === BookPageEnum.list && (
                <>
                    <button 
                        onClick={() => setBookPage(BookPageEnum.add)} className="add-button"> Adicionar Livro 
                    </button>
                    <BookList
                    categories={categoryList}
                    list={bookList}
                    onDeleteClickHnd={deleteBook}
                    onEdit={editBookData}
                    />
                </>
                )}
                {bookPage === BookPageEnum.add && (
                    <AddBook 
                        categories={categoryList}
                        onBackBtnClickHnd={() => setBookPage(BookPageEnum.list)}
                        onSubmitClickHnd={addBook}
                    />
                )}
            </>
        )}

        {/*USERS*/}

        {activeTab === 'users' && (
            <>
                {userPage === UserPageEnum.list && (
                <>
                    <button 
                        onClick={() => setUserPage(UserPageEnum.add)} className="add-button"> Adicionar Usuário 
                    </button>
                    <UserList 
                        list={userList}
                        onDeleteClickHnd={deleteUser}
                        onEdit={editUserData}
                    />
                </>
                )}
                {userPage === UserPageEnum.add && (
                    <AddUser 
                        onBackBtnClickHnd={() => setUserPage(UserPageEnum.list)}
                        onSubmitClickHnd={addUser}
                    />
                )}
                {userPage === UserPageEnum.edit && dataToEditUser && (
                    <EditUser 
                        data={dataToEditUser}
                        onBackBtnClickHnd={() => setUserPage(UserPageEnum.list)}
                        onUpdateClickHnd={updateUserData}
                    />
                )}
            </>
        )}

        {/*LOANS*/}

        {activeTab === 'loans' && (
            <>
                {loanPage === LoanPageEnum.list && (
                <>
                    <button onClick={() => setLoanPage(LoanPageEnum.add)} className="add-button"
                        disabled={bookList.filter(b => b.disponivel).length === 0 || userList.length === 0}> Registrar Empréstimo
                    </button>
                    {bookList.filter(b => b.disponivel).length === 0 && (
                        <p className="warning">Nenhum livro disponível para empréstimo</p>
                    )}
                    {userList.length === 0 && (
                        <p className="warning">Nenhum usuário cadastrado</p>
                    )}
                    <LoanList 
                        list={loanList}
                        onDeleteClickHnd={deleteLoan}
                        onEdit={editLoanData}
                        onReturn={returnLoan}                       
                    />
                </>
                )}
                {loanPage === LoanPageEnum.add && (
                    <AddLoan 
                        books={bookList.filter(b => b.disponivel)}
                        users={userList}
                        onBackBtnClickHnd={() => setLoanPage(LoanPageEnum.list)}
                        onSubmitClickHnd={addLoan}
                    />
                )}
                {loanPage === LoanPageEnum.edit && dataToEditLoan && (
                    <EditLoan 
                        data={dataToEditLoan}
                        onBackBtnClickHnd={() => setLoanPage(LoanPageEnum.list)}
                        onUpdateClickHnd={updateLoanData}
                    />
                )}
            </>
        )}

        {/*CATEGORIES */}
        {activeTab === 'categories' && (
            <>
                {categoryPage === CategoryPageEnum.list && (
                <>
                    <button 
                        onClick={() => setCategoryPage(CategoryPageEnum.add)} className="add-button"> Adicionar Categoria
                    </button>
                    <CategoryList 
                        list={categoryList}
                        onDeleteClickHnd={deleteCategory}
                        onEdit={editCategoryData}
                    />
                </>
                )}
                {categoryPage === CategoryPageEnum.add && (
                    <AddCategory
                        onBackBtnClickHnd={() => setCategoryPage(CategoryPageEnum.list)}
                        onSubmitClickHnd={addCategory}
                    />
                )}
                {categoryPage === CategoryPageEnum.edit && dataToEditCategory && (
                    <EditCategory
                        data={dataToEditCategory}
                        onBackBtnClickHnd={() => setCategoryPage(CategoryPageEnum.list)}
                        onUpdateClickHnd={updateCategoryData}
                    />
                )}
            </>
        )}
    </>
    );
}

export default Home;