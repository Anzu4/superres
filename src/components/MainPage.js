import React from 'react';
import '../styles/style.scss';

export default function MainPage() {
  return (
    <div id={'container'}>
      {/* Splash page area. Sinple headliner of what this page is about. */}
      <div id={'intro-box'}>
        <section>
          <span className={'span-1'}></span>
          <span className={'span-2'}></span>
          <span className={'span-3'}></span>
          <span className={'span-4'}></span>
          <span className={'span-2'}></span>
          <span className={'span-3'}></span>
          Pres<span className={'span-4'}>y</span>napt
          <span className={'span-4'}>i</span>c M
          <span className={'span-1'}>o</span>lecul
          <span className={'span-3'}>a</span>r Carto
          <span className={'span-2'}>g</span>rap
          <span className={'span-1'}>h</span>y at Na
          <span className={'span-2'}>n</span>oscale{' '}
          <span className={'span-3'}>R</span>esolu
          <span className={'span-1'}>t</span>ion
        </section>
      </div>
      {/* More detail can go here. A few paragraphs expanding on the first section. Links to further explainations and power point images */}
      <div id={'second-box'}>
        <section>
          <h1>Section Header</h1>
          <p>
            The presynaptic bouton is a core information processing unit in
            neural circuits. Understanding the rules that govern presynaptic
            behavior requires knowing not only which proteins are important, but
            where they are organized within the bouton. We use{' '}
            <span className='popout microscopy'>
              {' '}
              advanced microscopy techniques{' '}
            </span>{' '}
            to pinpoint where molecules are organized in live presynaptic
            boutons. By getting a clearer picture of molecular organization in
            live synapses, we can expand our understanding of presynaptic
            dynamics.{' '}
          </p>
        </section>
      </div>
      {/* Final section. Might include links to relevent info? */}
      <div id={'third-box'}>
        <section>
          <h1 className='header'>Section Header</h1>
          <div className='img-left' id='vGlut'></div>
          <p className='info-right'>
            This is information about the image to the left
          </p>
          <p className='info-left'>
            This is information about the image to the right
          </p>
          <div className='img-right' id='sunrise'></div>
        </section>
      </div>
    </div>
  );
}
