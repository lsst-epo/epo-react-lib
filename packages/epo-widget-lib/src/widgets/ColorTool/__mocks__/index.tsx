import { AstroCategory } from "../ColorTool";
import ColorSwatch from "@rubin-epo/epo-react-lib/ColorSwatch";

export const colorOptions = [
  {
    value: "#EC1C24",
    label: "Red",
    icon: <ColorSwatch color="#EC1C24" size="small" />,
  },
  {
    value: "#6BD853",
    label: "Green",
    icon: <ColorSwatch color="#6BD853" size="small" />,
  },
  {
    value: "#0019FF",
    label: "Blue",
    icon: <ColorSwatch color="#0019FF" size="small" />,
  },
  {
    value: "transparent",
    label: "None",
    icon: <ColorSwatch color="transparent" size="small" />,
  },
];
export const multiSpectralOptions = [
  ...colorOptions,
  {
    value: "#ee82ee",
    label: "Violet",
    icon: <ColorSwatch color="#ee82ee" size="small" />,
  },
  {
    value: "#FFDD15",
    label: "Yellow",
    icon: <ColorSwatch color="#FFDD15" size="small" />,
  },
  {
    value: "#F18922",
    label: "Orange",
    icon: <ColorSwatch color="#F18922" size="small" />,
  },
  {
    value: "#00ffff",
    label: "Cyan",
    icon: <ColorSwatch color="#00ffff" size="small" />,
  },
  {
    value: "#ff00ff",
    label: "Magenta",
    icon: <ColorSwatch color="#ff00ff" size="small" />,
  },
];

export const readOnlyData: AstroCategory[] = [
  {
    type: "Spiral Galaxies",
    objects: [
      {
        name: "M33",
        filters: [
          {
            label: "u",
            defaultColor: "#ee82ee",
            color: "",
            active: true,
            image:
              "https://rubin.canto.com/direct/image/qq48hm2c5d4v95uf6pmg7f1s0d/-nhhC0kh4FXOCtNoYpmxbqIC0_U/original?content-type=image%2Fpng&name=m33-u.png",
            isDisabled: false,
            value: 24,
            defaultValue: 24,
            min: 1.5,
            max: 4,
          },
          {
            label: "g",
            defaultColor: "#0019FF",
            color: "",
            active: true,
            image:
              "https://rubin.canto.com/direct/image/ag9v71v4tl2m7bh3210p5t9c35/IDnpMCWjdrFqnYBwf9DvZ6dhMaQ/original?content-type=image%2Fpng&name=m33-g.png",
            isDisabled: false,
            value: 40,
            defaultValue: 40,
            min: 0.5,
            max: 2.5,
          },
          {
            label: "r",
            defaultColor: "#6BD853",
            color: "",
            active: true,
            image:
              "https://rubin.canto.com/direct/image/3vtm34v4ed2phaahv0u9p44h5r/4tdzWP7VEiIZzPwMrjjvpAaV4ps/original?content-type=image%2Fpng&name=m33-r.png",
            isDisabled: false,
            value: 30,
            defaultValue: 30,
            min: 1,
            max: 3,
          },
          {
            label: "i",
            defaultColor: "#FFDD15",
            color: "",
            active: true,
            image:
              "https://rubin.canto.com/direct/image/bhrkitfath4nh5ieaua9t84l3u/jVxMqSAZGvMkTs-zdz4_osC9gEg/original?content-type=image%2Fpng&name=m33-i.png",
            isDisabled: false,
            value: 16,
            defaultValue: 16,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "z",
            defaultColor: "#F18922",
            color: "",
            active: true,
            image:
              "https://rubin.canto.com/direct/image/tqs61vkqpt2d7ch488m0pdln5a/ufs9fI7B_26kuvoq3KFY3eWbDQw/original?content-type=image%2Fpng&name=m33-z.png",
            isDisabled: false,
            value: 11,
            defaultValue: 11,
            min: 0.4,
            max: 1.6,
          },
          {
            label: "y",
            defaultColor: "#EC1C24",
            color: "",
            active: true,
            image:
              "https://rubin.canto.com/direct/image/ltq8u1atnp1pb6fpn3gs4m275d/SH0Y_OGB3UIyHoKsejZiYoD6n4w/original?content-type=image%2Fpng&name=m33-y.png",
            isDisabled: false,
            value: 5,
            defaultValue: 5,
            min: 1,
            max: 3.5,
          },
        ],
      },
    ],
  },
];

export const multiData: AstroCategory[] = [
  {
    type: "Spiral Galaxies",
    objects: [
      {
        name: "M51",
        filters: [
          {
            label: "u",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 1,
            min: 1.5,
            max: 4,
          },
          {
            label: "g",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/ap8l8p8ur51qf8sr3v8147ol3j/xMu5hnucuVpjG3L26FlpZeL3lWg/original?content-type=image%2Fpng&name=m51-g.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 2,
          },
          {
            label: "r",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/4lml1nfiel1k15dp3pg8favp27/PIGtJrQ-HmytEkeT5ceY0_LkQRY/original?content-type=image%2Fpng&name=m51-r.png",
            isDisabled: false,
            value: 1,
            min: 0.8,
            max: 1.2,
          },
          {
            label: "i",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/gb3pasa7fd71p6jvihmghoc001/MHG4tV4ZDcZyLnimGq7k4JO0ahM/original?content-type=image%2Fpng&name=m51-i.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "z",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/2ie35ck02545f8a7nbtuhoip2v/vkM8-hTxWJLca-f8I_HZryImuYY/original?content-type=image%2Fpng&name=m51-z.png",
            isDisabled: false,
            value: 1,
            min: 0.4,
            max: 1.6,
          },
          {
            label: "y",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/5dtacpq0e17k1abguvh1vdcr3j/koH1KVoBLFNk3MXDq0dN2aefPu8/original?content-type=image%2Fpng&name=m51-y.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.5,
          },
        ],
      },
      {
        name: "M101",
        filters: [
          {
            label: "u",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/bgsp96evr50b905tt603k3ar6a/CNTJM6NErMaY9DgOUPVsInqQMxo/original?content-type=image%2Fpng&name=m101-U.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 2,
          },
          {
            label: "g",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/t3fjk0voj154l4c16csd5l6p0c/qO0jv_1dcfOb1QbiPWNpnXMBHes/original?content-type=image%2Fpng&name=m101-g.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 2,
          },
          {
            label: "r",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/1uk4vuqfep7dv5hsvqnn3oov7k/jTYNDvZ2fRyfOIoJFRDs0GKiNbE/original?content-type=image%2Fpng&name=m101-r.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.8,
          },
          {
            label: "i",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "z",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/646rqr5bk924757dg15r071433/mfHtLssWqOiCo0dyepzRMzmCVSE/original?content-type=image%2Fpng&name=m101-z.png",
            isDisabled: false,
            value: 1,
            min: 1.1,
            max: 2,
          },
          {
            label: "y",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/35t8tfbokh1b7dd2ib78se055l/Mum0s0bJBNxVVs27H4lly_tIgJE/original?content-type=image%2Fpng&name=m101-y.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.7,
          },
        ],
      },
      {
        name: "NGC6946",
        filters: [
          {
            label: "u",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/ps1nv48pod7kp8jkal7rj8e22d/Vg6XWMBCAqQMK06B13l7awik5Qg/original?content-type=image%2Fpng&name=ngc6946-u.png",
            isDisabled: false,
            value: 1,
            min: 1.5,
            max: 2,
          },
          {
            label: "g",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/54t2f0g3rt1l9dcqg50a4qe02s/qTrPrJ6Nj9CKbURbcXGdvdl6gHI/original?content-type=image%2Fpng&name=ngc6946-g.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.8,
          },
          {
            label: "r",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/jnploksh1961d04k5df9km8p3d/qaL4ovRlB7b9l1JgXLDCXkKl5W8/original?content-type=image%2Fpng&name=ngc6946-r.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.5,
          },
          {
            label: "i",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "z",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 1,
            min: 0.4,
            max: 1.6,
          },
          {
            label: "y",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/6ng28af4jp7lp2pmmmh6sb465r/J6gT1uRfNHdASNdr-TYuidyGo9M/original?content-type=image%2Fpng&name=ngc6946-y.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.5,
          },
        ],
      },
    ],
  },
  {
    type: "Dusty Nebulae",
    objects: [
      {
        name: "NGC2070",
        filters: [
          {
            label: "u",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/2va0f9d0t10pn7nrvhgqiosl7o/8pJ9M3y3KF2iTwgLG3xFsCbBQ9U/original?content-type=image%2Fpng&name=ngc2070-u.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.6,
          },
          {
            label: "g",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/gfm18o0efd1bnd9qeebnh1d923/zr0ioF9GkArTvv2tvDBl3N480nw/original?content-type=image%2Fpng&name=ngc2070-g.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.3,
          },
          {
            label: "r",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/lqs49e1nal4onducsv0c7onk0o/gvrf32rp4I3_QmVO_sn5gqEl6x0/original?content-type=image%2Fpng&name=ngc2070-r.png",
            isDisabled: false,
            value: 0.8,
            min: 0.8,
            max: 1.2,
          },
          {
            label: "i",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/kvikeni55h1nba559abiar6869/oxc7v6oTbxyWZISp5tpe3gRBpJs/original?content-type=image%2Fpng&name=ngc2070-i.png",
            isDisabled: false,
            value: 0.8,
            min: 0.8,
            max: 1.2,
          },
          {
            label: "z",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 0.4,
            min: 0.4,
            max: 1.6,
          },
          {
            label: "y",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 1,
            min: 1,
            max: 1.5,
          },
        ],
      },
      {
        name: "NGC6520",
        filters: [
          {
            label: "u",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/gqbn9ej7n95nt86j08or88jc0f/Pi54iPhu8KqzMFLJ8qyhU77mksU/original?content-type=image%2Fpng&name=ngc6520-u.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.6,
          },
          {
            label: "g",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/ub1agm2g6l6bt78k3ao9uu8q38/e-eUXIxRwmP05KxBSQjdgp5ydxE/original?content-type=image%2Fpng&name=ngc6520-g.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "r",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/25274m9ob9729e9oc99of84e0c/3DunobtdzRSc_AetzWghwYc3qHM/original?content-type=image%2Fpng&name=ngc6520-r.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.8,
          },
          {
            label: "i",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "z",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/4b0d1qsj5968j8m5hntevdch7c/okSoAAbzAd6Eps-5PMO1MgPGCCE/original?content-type=image%2Fpng&name=ngc6520-z.png",
            isDisabled: false,
            value: 1,
            min: 0.4,
            max: 1.6,
          },
          {
            label: "y",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/2ioh5qhv8p1k13n5re8tbost3m/Y7_uwz8DjDG9XQWz9OxqNZKTtw4/original?content-type=image%2Fpng&name=ngc6520-y.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.5,
          },
        ],
      },
      {
        name: "B68",
        filters: [
          {
            label: "u",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/eummk74bcp7fr0f4cerrgcgg2g/KvJBqk5I0YtSYWiyAGnQnYUceMc/original?content-type=image%2Fpng&name=b68-u.png",
            isDisabled: false,
            value: 1,
            min: 1.5,
            max: 4,
          },
          {
            label: "g",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/1pa82moib57e98e1d4ksl8eu3u/z5vy-34UGzJgZni2W_qjL7UjkoA/original?content-type=image%2Fpng&name=b68-i.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "r",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/tavq3ukd2p1vj5djkif8o9e205/uPa_7ZasKjIj6mDc7l4B3t2AkTA/original?content-type=image%2Fpng&name=b68-r.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "i",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/1pa82moib57e98e1d4ksl8eu3u/z5vy-34UGzJgZni2W_qjL7UjkoA/original?content-type=image%2Fpng&name=b68-i.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.2,
          },
          {
            label: "z",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/q7heredk913sl0srtusae1bo71/sknMZAtcHeSw0875F8ZLiH8ZNI4/original?content-type=image%2Fpng&name=b68-z.png",
            isDisabled: false,
            value: 1,
            min: 0.4,
            max: 1.6,
          },
          {
            label: "y",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 1,
            min: 1,
            max: 3.5,
          },
        ],
      },
      {
        name: "B93",
        filters: [
          {
            label: "u",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/k8bpi4phu51qv30iftnmnbcv6a/j7mvwlRefW-_m63OBdclaa-VyQo/original?content-type=image%2Fpng&name=b93-u.png",
            isDisabled: false,
            value: 1,
            min: 1.5,
            max: 4,
          },
          {
            label: "g",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/on14e1ea3p7df6fgg4eg4clu11/Y0fhJpA4RNSaPeTzfrz9eazfoTg/original?content-type=image%2Fpng&name=b93-g.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 2.1,
          },
          {
            label: "r",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/i16ssh2vbl1ena7me81ptu612e/kFaAHQeiVgMf1N-d3XL5D_vCjsc/original?content-type=image%2Fpng&name=b93-r.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 2,
          },
          {
            label: "i",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/d13kgkcjv144l811k6pcjmpa47/kDd8J2gsn4OKrrGKQqvP3UbW6go/original?content-type=image%2Fpng&name=b93-i.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "z",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/18i9dp8cmt0jj981d1065m4l36/BYvvuPPkfYRT9rLtNrnNgolNAiI/original?content-type=image%2Fpng&name=b93-z.png",
            isDisabled: false,
            value: 1,
            min: 0.4,
            max: 1.6,
          },
          {
            label: "y",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 1,
            min: 1,
            max: 3.5,
          },
        ],
      },
    ],
  },
  {
    type: "Far Away Galaxies",
    objects: [
      {
        name: "COSMOS 1569673",
        filters: [
          {
            label: "u",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 0,
            min: 0,
            max: 0,
          },
          {
            label: "g",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/9rmquftf190k5blc4u85csat5i/IO2VIMxLJMnYd_txB2PWLrS2FIY/original?content-type=image%2Fpng&name=cosmos_1569673-g.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "r",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/ui9lpfcnjl35jccb0lb1d2ij7m/62gjFJJdfc9MYkvOOuE4zWwCx-s/original?content-type=image%2Fpng&name=cosmos_1569673-r.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.8,
          },
          {
            label: "i",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/hnm5q2l17174bbbqila4dm2a04/s1tg6jUTqQVk8JThGs8jcU3NGJQ/original?content-type=image%2Fpng&name=cosmos_1569673-i.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "z",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/4ao6sa1u8h5idfre7ulvg2eg0r/A6WPfSVXf-AGcpnfbMMDk7d6JcY/original?content-type=image%2Fpng&name=cosmos_1569673-z.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 2,
          },
          {
            label: "y",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/h6q3p9mic51i16up31tl203g36/tbarHP7q8mmsHrjxADtYrzgLCPU/original?content-type=image%2Fpng&name=cosmos_1569673-y.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.8,
          },
        ],
      },
      {
        name: "COSMOS 1606422",
        filters: [
          {
            label: "u",
            color: "",
            active: false,
            image: "",
            isDisabled: true,
            value: 0,
            min: 0,
            max: 0,
          },
          {
            label: "g",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/pa0j4etkv16q5boq6chkf70k6g/fH7rKhrxawVUGsJ_v6CCCbQ83W8/original?content-type=image%2Fpng&name=cosmos_1606422-g.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "r",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/tv8sosp9vh0dp7aptgqioevj26/Psyf9kEPNBEOC0QlIISDE2ppm5Q/original?content-type=image%2Fpng&name=cosmos_1606422-r.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 2,
          },
          {
            label: "i",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/1bve75ecst2e1bs4ckno1bq73a/20XTWiRRiGqvDD6OkLpRzY_YHD8/original?content-type=image%2Fpng&name=cosmos_1606422-i.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "z",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/0kijf8v2n16u1c4fbreur3dr2j/84zTUBdFb9OCovS4NAWT1yPCTnA/original?content-type=image%2Fpng&name=cosmos_1606422-z.png",
            isDisabled: false,
            value: 1,
            min: 1,
            max: 1.5,
          },
          {
            label: "y",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/8qn6defttl53h0ii05209lf113/HvrzcLSleFM4EalVXmnK0KNc5T8/original?content-type=image%2Fpng&name=cosmos_1606422-y.png",
            isDisabled: false,
            value: 1,
            min: 0.4,
            max: 1.2,
          },
        ],
      },
      {
        name: "Tadpole Galaxy",
        filters: [
          {
            label: "u",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/kinedniemh6ef33a868loc4q61/oG1nzp-_nBMss0v3c4I6fKipdq4/original?content-type=image%2Fpng&name=out_u_cut.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "g",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/q1n525b1hl2qf1ng9o3iqeob1i/LVIsrz5RNw1jv2mkUzgHgwpTEJA/original?content-type=image%2Fpng&name=out_g_cut.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "r",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/fm2eutj5ld0fd9sjs90j4u040i/SeKIbjtSsUdcAkzYzPZzeME3Cps/original?content-type=image%2Fpng&name=out_r_cut.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "i",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/38aujj3jkt22v52f7atq18ao26/g3ugqi5tcpN9_gdiOYzLGE9iZ0Q/original?content-type=image%2Fpng&name=out_i_cut.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "z",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/ee7qqmcv3t19r9c1ht0vfu2951/R6vXYjUMyg3OzO8z-1GCsBkJbsc/original?content-type=image%2Fpng&name=out_z_cut.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
          {
            label: "y",
            color: "",
            active: false,
            image:
              "https://rubin.canto.com/direct/image/hs83gc8gjt3rl66sigve0otq1m/_NGAVnpEzf0uH8E-7_8ITCdODdE/original?content-type=image%2Fpng&name=out_y_cut.png",
            isDisabled: false,
            value: 1,
            min: 0.5,
            max: 1.5,
          },
        ],
      },
    ],
  },
];
export const singleData: AstroCategory[] = [
  {
    type: "color",
    objects: [
      {
        name: "RGB Filter",
        filters: [
          {
            label: "R",
            color: "",
            defaultValue: 10,
            value: 1,
            min: 0.5,
            max: 1.5,
            active: false,
            image:
              "https://rubin.canto.com/direct/image/km7euaq0kt4crci0c00f871f7u/NhhwcPtZeKdSL-E3N8ujV_5J-vE/original?content-type=image%2Fpng&name=red-filter.png",
            isDisabled: false,
          },
          {
            label: "G",
            color: "",
            defaultValue: 20,
            value: 1,
            min: 0.5,
            max: 1.5,
            active: false,
            image:
              "https://rubin.canto.com/direct/image/f3btsb8c2h0ed9no1t3jtsj826/ln-W72gmMf0o9kgDOI7CoVwOHS4/original?content-type=image%2Fpng&name=green-filter.png",
            isDisabled: false,
          },
          {
            label: "B",
            color: "",
            defaultValue: 30,
            value: 1,
            min: 0.5,
            max: 1.5,
            active: false,
            image:
              "https://rubin.canto.com/direct/image/ni751vmijl17jee85kujnu7a69/3FwZlvVdtL4xQNL0kDZeU1tSEy4/original?content-type=image%2Fpng&name=blue-filter.png",
            isDisabled: false,
          },
        ],
      },
    ],
  },
];
