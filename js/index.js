'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sections = [{
  key: 'sign-up-header',
  header: 'LIVE,WEB-BASED,REAL BROWSER TESTING',
  content: 'instant access to all real mobile and desktop browsers. Easiest way to test websites. Say goodbye to your lab of devices and virtual machines.',
  button: 'SIGN UP'
}, {
  key: 'get-started',
  header: 'Test dev environments',
  content: 'Our local testing feature allows you to test development and internal websites seamlessly,without setup or configuration. Real browsers on real machines. Just like a locally installed browser with media streaming.',
  button: 'GET STARTED!'
}, {
  key: 'features',
  header: 'Features',
  content: [{
    imgSrc: 'images/ico-screen.png',
    caption: 'Native experience',
    description: 'Real browsers on real machines. Just like a locally installed browser with media streaming.'
  }, {
    imgSrc: 'images/ico-wrench.png',

    caption: 'Test environments',
    description: 'Our local testing feature allows you to test development and internal websites seamlessly.'
  }, {
    imgSrc: 'images/ico-windows.png',
    caption: 'Desktop browsers',
    description: 'Lates version of IE, Edge, Safari,Chrome,Firefox and more on range of platforms.'
  }]
}, {
  key: 'sign-up-footer',
  header: 'Signup for a free trial',
  button: 'sign up'
}];
var images = ['images/bg1.jpg', 'images/bg2.jpg', 'images/bg3.jpg'];
var SliderWindow = function SliderWindow() {
  return React.createElement(
    'div',
    { id: 'sliderWindow' },
    React.createElement(
      'div',
      { id: 'slider' },
      images.map(function (image) {
        return React.createElement('img', { src: image });
      })
    )
  );
};
var Header = function Header() {
  return React.createElement(
    'header',
    null,
    React.createElement(
      'nav',
      { id: 'main-nav' },
      React.createElement(
        'div',
        { className: 'brand' },
        'browserstack'
      ),
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          'live'
        ),
        React.createElement(
          'li',
          null,
          'automate'
        ),
        React.createElement(
          'li',
          null,
          'screenshots'
        ),
        React.createElement(
          'li',
          null,
          'help'
        )
      )
    )
  );
};
var ThumbnailGroup = function ThumbnailGroup(_ref) {
  var thumbnails = _ref.thumbnails;
  return React.createElement(
    'div',
    { className: 'thumbnail-group' },
    thumbnails.map(function (thumbnail) {
      return React.createElement(
        'div',
        { className: 'thumbnail' },
        React.createElement('img', { src: thumbnail.imgSrc }),
        React.createElement(
          'caption',
          null,
          thumbnail.caption
        ),
        React.createElement(
          'div',
          { className: 'description' },
          thumbnail.description
        )
      );
    })
  );
};

var Section = function Section(_ref2) {
  var section = _ref2.section;
  return React.createElement(
    'section',
    { id: section.key },
    React.createElement(
      'header',
      null,
      React.createElement(
        'span',
        null,
        section.header
      )
    ),
    section.content && React.createElement(
      'div',
      { className: 'content' },
      React.createElement(
        'span',
        null,
        typeof section.content === 'string' ? section.content : React.createElement(ThumbnailGroup, { thumbnails: section.content })
      ),
      ' '
    ),
    section.button && React.createElement(
      'div',
      { className: 'button-container' },
      React.createElement(
        'span',
        null,
        React.createElement(
          'button',
          null,
          section.button
        )
      )
    )
  );
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'inner-container' },
        React.createElement(Header, null),
        sections.map(function (section) {
          return React.createElement(Section, { section: section });
        }),
        React.createElement(SliderWindow, null)
      )
    );
  };

  return App;
}(React.Component);

React.render(React.createElement(App, null), document.body);