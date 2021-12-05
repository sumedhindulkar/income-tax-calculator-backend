
GET - /building/:building-id        => To show the details of building and generate qrcode
GET - /building/:building-id/qrcode => To get the qr code of building

GET - /building/visitor-screen      => To get the visitor entry

GET - /visitor/:visitor-id         => To get visitor details
GET - /visitor/:visitor-id/scan    => To scan the qrcode

GET - /visitor/:visitor-id/:building-id/form => To get form of that building

Database: visitor;

building = [
  {
    id: 1,
    name: "runwals",
    floor: 20,
    qrcode: "xyz",
    visitors: [
      {
        Vname: "sammy",
        VPhoneNumber: "9998887776",
        visitTime: "default",
      },
      {
        Vname: "dom",
        VPhoneNumber: "9998887775",
        visitTime: "default",
      },
    ],
  },
  {
    id: 2,
    name: "runwals",
    floor: 20,
    qrcode: "xyz",
    visitors: [
      {
        Vname: "sammy",
        VPhoneNumber: "9998887776",
        visitTime: "default",
      },
      {
        Vname: "dom",
        VPhoneNumber: "9998887775",
        visitTime: "default",
      },
    ],
  },
];

visitor = [
  {
    id: 1,
    name: "sam",
    phone: "999000888",
    email: "sam@gmail.com",
    photo: "url",
  },
  {
    id: 1,
    name: "sam",
    phone: "999000888",
    email: "sam@gmail.com",
    photo: "url",
  },
  {
    id: 1,
    name: "sam",
    phone: "999000888",
    email: "sam@gmail.com",
    photo: "url",
  },
];
