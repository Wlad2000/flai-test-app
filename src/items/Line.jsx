import React from 'react'
/**  Returns jsx line
 * @param {func,number,string} number icon, progress, title
 * 
 * 
 */
const Line = (props) => {
    return (
        <div style={{
            width: '100%', display: 'flex', flexDirection: 'column', rowGap: '10px', paddingBottom: '10px'

        }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }
            } >
                <p style={{ fontWeight: 600, fontSize: '16px', columnGap: '10%', display: 'flex' }}>
                    {props.icon()}
                    {props.title}</p>
                <p style={{ fontWeight: 600, fontSize: '16px' }}>{props.progress}%</p>
            </div >
            <div style={{
                width: '100%', background: '#212122', height: '10px', padding: '3px', display: 'flex', alignItems: 'center'
            }}>
                <div style={{ width: `${props.progress}%`, background: '#D1FD0A', height: '100% ', border: 'none', borderRight: 'none', alignItems: 'center' }}>
                </div>
                <div style={{ width: '0.5px', height: '10px', border: 'none', borderRight: '3px solid white', marginBottom: '1px' }}>
                </div>
            </div>
        </div >
    )
}

export default Line