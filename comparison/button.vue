<template>
    <ul class="example-2">
        <li class="icon-content">
          <a
            data-social="spotify"
            aria-label="Spotify"
          >
            <div class="filled"></div>
            <svg viewBox="0 0 100 100" version="1.1">
              <path
                fill="currentColor"
                d="M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M71.6,71.5c0,0,0,0.1-0.1,0.1c-0.8,1.2-2,1.8-3.2,1.8  c-0.7,0-1.4-0.2-2-0.6c-10.2-6.3-23.3-7.7-38.8-4.1c-2.1,0.6-4-0.9-4.5-2.7c-0.6-2.3,0.9-4.1,2.7-4.6c17.7-4,32.6-2.3,44.4,5  c0.9,0.4,1.5,1,1.8,1.9C72.2,69.3,72.1,70.5,71.6,71.5z M76.9,59.3L76.9,59.3c-0.8,1.1-1.9,1.9-3.2,2.1c-0.2,0-0.5,0.1-0.7,0.1  c-0.8,0-1.6-0.3-2.3-0.7c-12-7.3-30.1-9.4-43.9-5c-2.5,0.6-5-0.7-5.6-3c-0.6-2.5,0.7-4.9,3-5.5c16.5-5,37.2-2.5,51.4,6.2  c0.8,0.4,1.5,1.3,1.8,2.5C77.9,57,77.6,58.3,76.9,59.3z M83.2,45.6c-1,1.4-2.7,2.1-4.4,2.1c-0.9,0-1.9-0.2-2.7-0.7c0,0,0,0,0,0  c-13.9-8.3-37.8-9.3-51.4-5.1c-2.7,0.8-5.5-0.7-6.4-3.3c-0.8-2.7,0.7-5.6,3.3-6.4c16.2-4.8,43-3.8,59.8,6.2  C83.8,39.6,84.7,42.9,83.2,45.6C83.3,45.5,83.3,45.5,83.2,45.6z"
              ></path>
            </svg>
          </a>
          <div class="tooltip">change</div>
        </li>
      </ul>
</template>
<script>
export default{

}
</script>

<style scoped>

ul {
    list-style: none;
  }
  
  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  a :hover {
    cursor: pointer;
  }
  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
    writing-mode: horizontal-tb;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a:hover {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }
  .example-2 .icon-content a[data-social="spotify"] .filled,
  .example-2 .icon-content a[data-social="spotify"] ~ .tooltip {
    background-color: #1db954;
  }
  .example-2 .icon-content a[data-social="pinterest"] .filled,
  .example-2 .icon-content a[data-social="pinterest"] ~ .tooltip {
    background-color: #bd081c;
  }
  .example-2 .icon-content a[data-social="dribbble"] .filled,
  .example-2 .icon-content a[data-social="dribbble"] ~ .tooltip {
    background-color: #ea4c89;
  }
  .example-2 .icon-content a[data-social="telegram"] .filled,
  .example-2 .icon-content a[data-social="telegram"] ~ .tooltip {
    background-color: #0088cc;
  }
  
</style>