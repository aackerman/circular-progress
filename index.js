import React from 'react';

export default React.createClass({

  displayName: 'CircularProgress',

  propTypes: {
    height: React.PropTypes.number.isRequired,
    percent: React.PropTypes.number.isRequired,
    strokeWidth: React.PropTypes.number,
    strokeColor: React.PropTypes.string,
    includeText: React.PropTypes.bool,
    fontFamily: React.PropTypes.string
  },

  render: function() {
    var percent          = this.props.percent;
    var strokeWidth      = this.props.strokeWidth || 3;
    var strokeColor      = this.props.stroke || '#CCC';
    var includeText      = this.props.includeText !== false;
    var height           = this.props.height;
    var fontFamily       = this.props.fontFamily || 'Verdana';
    var radius           = (height - strokeWidth) / 2;
    var cx               = height / 2;
    var cy               = height / 2;
    var circumference    = 2 * Math.PI * radius;
    var strokeDashoffset = (((100 - percent) / 100) * circumference);
    var textNode;

    var styles = {
      progress: {
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        strokeDashoffset: strokeDashoffset
      },
      text: {
        fontFamily: fontFamily,
        fontSize: height / 4,
        dominantBaseline: 'central'
      }
    };

    return (
      <svg width={height} height={height} viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle r={radius} cx={cx} cy={cy} style={styles.progress} fill="transparent" strokeDasharray={circumference}></circle>
        {includeText && <text style={styles.text} textAnchor='middle' x='50%' y='50%'>{percent+'%'}</text>}
      </svg>
    );
  }
});
