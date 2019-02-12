const AnalogDisplay = function (props) {
  let date = props.time;

  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black'
  };
  let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    backgroundColor: 'red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + (date.getSeconds() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 50%',
  };
  let minuteHandStyle = {
    position: 'relative',
    top: 98,
    left: 100,
    backgroundColor: 'grey',
    width: '40%',
    height: 4,
    transform: 'rotate(' + (date.getMinutes() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 50%',
  };
  let hourHandStyle = {
    position: 'relative',
    top: 96,
    left: 100,
    backgroundColor: 'blue',
    width: '20%',
    height: 8,
    transform: 'rotate(' + (date.getHours() / 12 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 20%',
  };
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { style: dialStyle },
      React.createElement('div', { style: secondHandStyle }),
      React.createElement('div', { style: minuteHandStyle }),
      React.createElement('div', { style: hourHandStyle })
    )
  );
};