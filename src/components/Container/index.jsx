import './Container.css'

export const Container = ({children}) =>{
    return(
        <main  className='main_container'>
            <h1 className='title'>Buscador de CEP</h1>
            {children}
        </main>
    )
}