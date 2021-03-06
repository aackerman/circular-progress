import React from 'react';

export default React.createClass({

  displayName: 'CircularProgress',

  propTypes: {
    height: React.PropTypes.number.isRequired,
    percent: React.PropTypes.number.isRequired,
    strokeWidth: React.PropTypes.number,
    strokeColor: React.PropTypes.string,
    isTextVisible: React.PropTypes.bool,
    styles: React.PropTypes.string
  },

  render: function() {
    var percent          = this.props.percent;
    var strokeWidth      = this.props.strokeWidth || 3;
    var strokeColor      = this.props.stroke || '#CCC';
    var isTextVisible    = this.props.isTextVisible !== false;
    var height           = this.props.height;
    var radius           = (height - strokeWidth) / 2;
    var cx               = height / 2;
    var cy               = height / 2;
    var circumference    = 2 * Math.PI * radius;
    var strokeDashoffset = (((100 - percent) / 100) * circumference);
    var textNode;

    var styles = this.props.styles || {
      progressBackground: {
        stroke: '#CCC',
        strokeWidth: strokeWidth
      },
      progress: {
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        strokeDashoffset: strokeDashoffset,
        transition: 'stroke-dashoffset 1s linear'
      },
      text: {
        fontFamily: 'Verdana',
        fontSize: height / 5,
        dominantBaseline: 'central'
      }
    };

    return (
      <svg width={height} height={height} viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle r={radius} cx={cx} cy={cy} style={styles.progressBackground} fill="transparent" strokeDasharray='0'></circle>
        <circle r={radius} cx={cx} cy={cy} style={styles.progress} fill="transparent" strokeDasharray={circumference}></circle>
        {isTextVisible && <text style={styles.text} textAnchor='middle' x='50%' y='50%'>{percent+'%'}</text>}
      </svg>
    );
  }
});
