import './style/style.css';

import { createElementAndSetAttributes } from './helpers/htmlHelpers';
class Accessibility {
  constructor(arg) {
    /**
     * @type {{imageControl:boolean,contrastControl:boolean,fontControl:boolean,textToSpeech:boolean}}
     */
    this.config = {
      imageControl: true,
      contrastControl: true,
      fontControl: true,
      textToSpeech: true,
    };

    this.init = this.init.bind(this);
  }
  /**
   *
   * @param {HTMLElement} targetContainer
   * @param {'start' | 'end'} position
   * @param {{imageControl:boolean,contrastControl:boolean,fontControl:boolean,textToSpeech:boolean}} config
   */
  init(
    targetContainer = document.body,
    position = 'start',
    config = undefined
  ) {
    //create menu button elements
    const mainParagraph = document.createElement('p');
    const menuControlButton = createElementAndSetAttributes('button', {
      id: 'accessibility-button',
      class: 'btn btn-primary rounded-circle',
      type: 'button',
      'data-bs-toggle': 'collapse',
      'data-bs-target': '#collapseWidthExample',
      'aria-expanded': 'false',
      'aria-controls': 'collapseWidthExample',
    });
    const menuControlButtonImage = createElementAndSetAttributes('img', {
      src: './assets/accessibility-icon.svg',
      alt: 'Accessibility Icon',
      width: '45',
      height: '45',
    });

    //set image attributes
    menuControlButton.append(menuControlButtonImage);
    mainParagraph.append(menuControlButton);
    if (position === 'start') targetContainer.prepend(mainParagraph);
    else targetContainer.append(mainParagraph);

    //initialize menu container
    const mainContainer = createElementAndSetAttributes('div', {
      id: 'accessibility-container',
    });
    mainContainer.style.minHeight = '120px';
    mainContainer.style.position = 'relative';
    mainContainer.style.zIndex = '2000';

    const acceessiblityMenu = createElementAndSetAttributes('div', {
      class: 'collapse collapse-horizontal',
      id: 'collapseWidthExample',
    });
    acceessiblityMenu.style.position = 'absolute';
    acceessiblityMenu.style.top = '0';
    acceessiblityMenu.style.right = '0';

    const elmToPrepend = [];

    if (config) {
      config = { ...this.config, ...config };
    } else config = { ...this.config };
    console.log(config);
    //contrast
    if (config.contrastControl) {
      const cardBody = createElementAndSetAttributes('div', {
        class: 'card card-body',
      });
      cardBody.style.width = '300px';
      const label = createElementAndSetAttributes('label', {
        class: 'form-label',
        for: 'contrast-control',
      });
      label.textContent = 'contrast';
      const input = createElementAndSetAttributes('input', {
        type: 'range',
        class: 'form-range',
        min: '0',
        max: '2',
        step: '1',
        value: '1',
        id: 'contrast-control',
      });
      input.addEventListener('change', (e) => {
        console.log(e.target.value);
        if (e.target.value == 0) {
          // const elements = document.querySelectorAll('*');
          // for (let i in Array.from(elements)) {
          //   elements[i].style.color = 'black';
          // }
          document.body.classList.toggle('invert');
          if (document.body.classList.contains('dark-mode'))
            document.body.classList.toggle('dark-mode');
        } else if (e.target.value == 2) {
          if (document.body.classList.contains('invert'))
            document.body.classList.toggle('invert');
          document.body.classList.toggle('dark-mode');
        } else {
          if (document.body.classList.contains('dark-mode'))
            document.body.classList.toggle('dark-mode');
          if (document.body.classList.contains('invert'))
            document.body.classList.toggle('invert');
        }
      });

      cardBody.append(label, input);
      elmToPrepend.push(cardBody);
    }
    //font
    if (config.fontControl) {
      const cardBody = createElementAndSetAttributes('div', {
        class: 'card card-body',
      });
      cardBody.style.width = '300px';
      const label = createElementAndSetAttributes('label', {
        class: 'form-label',
        for: 'font-control',
      });
      label.textContent = 'font';
      const input = createElementAndSetAttributes('input', {
        type: 'range',
        class: 'form-range',
        min: '0',
        max: '2',
        step: '1',
        value: '1',
        id: 'font-control',
      });
      input.addEventListener('change', (e) => {
        if (e.target.value == 0) document.body.style.zoom = '100%';
        if (e.target.value == 1) document.body.style.zoom = '110%';
        if (e.target.value == 2) document.body.style.zoom = '120%';
      });

      cardBody.append(label, input);
      elmToPrepend.push(cardBody);
    }

    //image
    if (config.imageControl) {
      const cardBody = createElementAndSetAttributes('div', {
        class: 'card card-body',
      });
      cardBody.style.width = '300px';
      const formSwitch = createElementAndSetAttributes('div', {
        class: 'form-check form-switch',
      });
      const input = createElementAndSetAttributes('input', {
        class: 'form-check-input',
        type: 'checkbox',
        role: 'switch',
        id: 'image-control-switch',
        checked: true,
      });
      input.addEventListener('click', (e) => {
        const images = document.querySelectorAll('img');
        for (let i in images) {
          if (!e.target.checked) {
            if (images[i]?.style) images[i].style.visibility = 'hidden';
          } else {
            if (images[i]?.style) images[i].style.visibility = 'visible';
          }
        }
      });
      const label = createElementAndSetAttributes('label', {
        class: 'form-check-label',
        for: 'flexSwitchCheckChecked',
      });
      label.textContent = 'image';
      formSwitch.append(input, label);
      cardBody.appendChild(formSwitch);
      elmToPrepend.push(cardBody);
    }

    //text to speech
    if (config.textToSpeech) {
      const cardBody = createElementAndSetAttributes('div', {
        class: 'card card-body',
      });
      cardBody.style.width = '300px';
      const formSwitch = createElementAndSetAttributes('div', {
        class: 'form-check form-switch',
      });
      const input = createElementAndSetAttributes('input', {
        class: 'form-check-input',
        type: 'checkbox',
        role: 'switch',
        id: 'text-to-speech-control-switch',
      });
      function handleBodyClick() {
        if (document.getSelection().toString().length) {
          const synth = window.speechSynthesis;
          let ourText = document.getSelection().toString();
          const utterThis = new SpeechSynthesisUtterance(ourText);

          synth.speak(utterThis);
        }
      }
      input.addEventListener('click', (e) => {
        // e.target.checked = !e.target.checked;
        if (e.target.checked) {
          document.body.addEventListener('click', handleBodyClick);
        } else {
          document.body.removeEventListener('click', handleBodyClick);
        }
      });
      const label = createElementAndSetAttributes('label', {
        class: 'form-check-label',
        for: 'flexSwitchCheckChecked',
      });
      label.textContent = 'text to speech';
      formSwitch.append(input, label);
      cardBody.appendChild(formSwitch);
      elmToPrepend.push(cardBody);
    }

    acceessiblityMenu.append(...elmToPrepend);
    mainContainer.append(acceessiblityMenu);
    targetContainer.prepend(mainContainer);
    console.log(mainContainer);
  }
}
export default Accessibility;
// export { Accessibility };
