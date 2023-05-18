import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar(){
    return (    
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://pbs.twimg.com/profile_banners/384104245/1352857392/600x200" 
            />
            <div className={styles.profile}>

                <Avatar src="https://avatars.githubusercontent.com/u/59897978?v=4" />
                
                <strong>Igor Tibério</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
            
        </aside>
    );
}