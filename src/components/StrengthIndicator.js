import React from 'react';

function StrengthIndicator(props) {
    const { password } = props;
    
    function getColorAndWidth(len) {
        const colors = {
            orange: ['rgb(241, 155, 43)', '20%'],
            yellow: ['rgb(216, 209, 69)', '50%'],
            green: ['rgb(95, 216, 137)', '100%']
        }
        if (len < 8) return colors.orange;
        else if (len < 16) return colors.yellow
        else return colors.green
    }
    return (
        <span className='strength-indicator' style={{
            backgroundColor: getColorAndWidth(password.length)[0],
            width: getColorAndWidth(password.length)[1],
            transition: 'width .63s',
        }}>
        </span>
    );
}

export default StrengthIndicator;