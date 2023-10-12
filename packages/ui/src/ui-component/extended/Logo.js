import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)
    console.log('env variables', process.env)
    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            {/* <img
                style={{ objectFit: 'contain', height: 'auto', width: 150 }}
                src={customization.isDarkMode ? logoDark : logo}
                // src={'https://picsum.photos/200/300'}
                alt='Flowise'
            /> */}
        </div>
    )
}

export default Logo
