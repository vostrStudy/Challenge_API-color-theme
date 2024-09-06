
import classes from "./mainStyles.module.scss"


function MainPage(){
    
    return(
        <div className={`page page--main ${classes.pageWrapper}`}>
            <header className = {classes.headerWrapper}>
                <h1 className='visually-hidden'>Header</h1>
            </header>
            <main className="page__main page__main--index">
                <h1 className="visually-hidden">Multistep</h1>
                
            </main>
        </div>

    )
}

export default MainPage