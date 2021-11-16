import React from 'react';
import { Three } from '.';
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
      {/* More detail can go here. A few paragraphs expanding on the first section */}
      <div id={'second-box'}>
        <section>
          <h1>Section Header</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            bibendum massa. Proin sagittis augue sed lectus pellentesque gravida
            vel sed nibh. Donec vel justo porttitor, bibendum ante et, tempor
            libero. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nulla id volutpat ante. Nam
            dignissim, sapien et congue pharetra, ipsum ligula fermentum dui, eu
            interdum eros purus eget nisi. Morbi auctor lacinia sapien auctor
            maximus. Suspendisse potenti. Praesent metus lorem, ullamcorper ac
            tempus at, egestas nec nisl. Vivamus ac ex lectus. Donec dignissim
            magna maximus est scelerisque viverra et vel augue. Nunc fermentum
            tristique odio.{' '}
          </p>
          <p>
            {' '}
            Nam tincidunt risus mi, sit amet accumsan dui tristique et. Maecenas
            eu lacus eu nisl sagittis egestas. Sed quis erat dignissim, semper
            eros et, ultrices elit. Nulla facilisi. Nunc lacus turpis, porttitor
            sed gravida sit amet, porttitor nec sapien. Nam faucibus felis eget
            vulputate hendrerit. Curabitur placerat cursus congue.{' '}
          </p>{' '}
          <p>
            Duis dictum ex vel mauris ornare, at faucibus purus maximus. Aenean
            ut rhoncus sapien. Nunc venenatis consequat ante vel commodo. Donec
            lacinia dui sed arcu bibendum, nec faucibus sapien vestibulum. Proin
            posuere nibh vel risus ultricies hendrerit. Nullam turpis velit,
            hendrerit at dui non, sagittis posuere justo. Aliquam vel arcu
            auctor, facilisis sem a, blandit tellus. Phasellus aliquam rutrum
            mi, id auctor ipsum suscipit facilisis. Etiam sed mauris tristique
            metus fringilla tempus. Etiam aliquet ante nec ultrices egestas.
            Integer posuere pellentesque eleifend. Vivamus tortor velit,
            consectetur sed turpis at, dictum luctus eros. Proin cursus, odio
            non ullamcorper elementum, neque nisi hendrerit purus, sed tempus
            mauris nisi at est. Cras aliquet dui mi, in tincidunt tellus laoreet
            quis. Nullam mollis egestas sapien, et iaculis tellus tristique sed.
          </p>
        </section>
      </div>
      {/* Final section. Might include links to relevent info? */}
      <div id={'third-box'}>
        <section>
          <h1>Section Header</h1>
          <Three />
        </section>
      </div>
    </div>
  );
}
