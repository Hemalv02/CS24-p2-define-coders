class Forum {
  final String id;
  final String name;
  final String profilePic;
  final String question;
  final String supportArea;
  final String description;
  final String location;
  final String upvote;
  final String downvote;
  final String comment;
  final List<String> imgList;
  final String commentPic1;
  final String commentPic2;
  final String comment1;
  final String comment2;

  Forum({
    required this.id,
    required this.name,
    required this.profilePic,
    required this.question,
    required this.supportArea,
    required this.description,
    required this.location,
    required this.upvote,
    required this.downvote,
    required this.comment,
    required this.imgList,
    required this.commentPic1,
    required this.commentPic2,
    required this.comment1,
    required this.comment2
  });
}

final List<String> dummyGurbage = [
  "assets/images/garbage1.jpg",
  "assets/images/garbage2.jpg",
  "assets/images/garbage12.png",
  "assets/images/garbage4.png",
  "assets/images/garbage5.png",
  "assets/images/garbage6.png",
  "assets/images/garbage7.png",
  "assets/images/garbage8.png",
  "assets/images/garbage9.png",
  "assets/images/garbage10.png",
  "assets/images/garbage3.png",

];

List<Forum> dummyForumList = [
  Forum(
    id: '1',
    name: 'John Doe',
    profilePic: "assets/images/propic1.png",
    question: 'What is the capital of France?',
    supportArea: 'Dhanmondi, Bangladesh',
    description: 'I am passionate about traveling and learning about different cultures.',
    location: 'Mohakhali',
    upvote: '50',
    downvote: '20',
    comment: '25',
    imgList: [dummyGurbage[0], dummyGurbage[1], dummyGurbage[2]],
    comment1: 'Mohakhali',
    comment2: '50',
    commentPic1: '20',
    commentPic2: '25',
  ),
  Forum(
    id: '2',
    name: 'Alice Smith',
    profilePic: "assets/images/propic19.png",
    question: 'How do I make a pizza?',
    supportArea: 'Gulshan, Bangladesh',
    description: 'I love cooking and experimenting with different recipes.',
    location: 'Lamabazar',
    upvote: '80',
    downvote: '5',
    comment: '30',
    imgList: [dummyGurbage[3], dummyGurbage[1], dummyGurbage[2]],
    comment1: 'Mohakhali',
    comment2: '50',
    commentPic1: '20',
    commentPic2: '25',
  ),
  Forum(
    id: '3',
    name: 'Bob Johnson',
    profilePic: "assets/images/propic2.png",
    question: 'What is the best programming language?',
    supportArea: 'Banani, Bangladesh',
    description: 'I am a software engineer with experience in various programming languages.',
    location: 'Dighirpar',
    upvote: '90',
    downvote: '10',
    comment: '40',
    imgList: [dummyGurbage[3], dummyGurbage[4], dummyGurbage[5]],
    comment1: 'Mohakhali',
    comment2: '50',
    commentPic1: '20',
    commentPic2: '25',
  ),
  Forum(
    id: '4',
    name: 'Emily Brown',
    profilePic: "assets/images/propic18.png",
    question: 'How can I improve my photography skills?',
    supportArea: 'Uttara, Bangladesh',
    description: 'I am a photography enthusiast looking to improve my skills.',
    location: 'Bondor',
    upvote: '70',
    downvote: '15',
    comment: '20',
    imgList: [dummyGurbage[6], dummyGurbage[7], dummyGurbage[8]],
    comment1: 'Mohakhali',
    comment2: '50',
    commentPic1: '20',
    commentPic2: '25',
  ),
  Forum(
    id: '5',
    name: 'Michael Wilson',
    profilePic: "assets/images/propic3.png",
    question: 'What are some tips for healthy eating?',
    supportArea: 'Mirpur, Bangladesh',
    description: 'I am a nutritionist passionate about promoting healthy eating habits.',
    location: 'Akhaliya',
    upvote: '60',
    downvote: '12',
    comment: '35',
    imgList: [dummyGurbage[9], dummyGurbage[10], dummyGurbage[1]],
    comment1: 'Mohakhali',
    comment2: '50',
    commentPic1: '20',
    commentPic2: '25',
  ),
  Forum(
    id: '6',
    name: 'Sophia Lee',
    profilePic: "assets/images/propic17.png",
    question: 'How to travel on a budget?',
    supportArea: 'Baridhara, Bangladesh',
    description: 'I am a travel enthusiast who loves exploring new destinations.',
    location: 'SUST',
    upvote: '85',
    downvote: '8',
    comment: '28',
    imgList: [dummyGurbage[2], dummyGurbage[3], dummyGurbage[4]],
    comment1: 'Mohakhali',
    comment2: '50',
    commentPic1: '20',
    commentPic2: '25',
  ),
  Forum(
    id: '7',
    name: 'Daniel Garcia',
    profilePic: "assets/images/propic4.png",
    question: 'What are the benefits of meditation?',
    supportArea: 'Mohakhali, Bangladesh',
    description: 'I have been practicing meditation for years and want to share its benefits with others.',
    location: 'Banani',
    upvote: '95',
    downvote: '3',
    comment: '50',
    imgList:[dummyGurbage[8], dummyGurbage[9], dummyGurbage[10]],
    comment1: 'Mohakhali',
    comment2: '50',
    commentPic1: '20',
    commentPic2: '25',
  ),
  Forum(
    id: '8',
    name: 'Olivia Martinez',
    profilePic: "assets/images/propic16.png",
    question: 'How to start a successful business?',
    supportArea: 'Panthapath, Bangladesh',
    description: 'I have started multiple successful businesses and can provide valuable insights.',
    location: 'Motijheel',
    upvote: '75',
    downvote: '18',
    comment: '22',
    imgList:[dummyGurbage[2], dummyGurbage[0], dummyGurbage[1]],
    comment1: 'Mohakhali',
    comment2: '50',
    commentPic1: '20',
    commentPic2: '25',
  ),
  Forum(
    id: '9',
    name: 'Ethan Taylor',
    profilePic: "assets/images/propic5.png",
    question: 'What are the best hiking trails in the world?',
    supportArea: 'Khilgaon, Bangladesh',
    description: 'I am an avid hiker and have explored many hiking trails around the world.',
    location: 'Chittogaong Road',
    upvote: '55',
    downvote: '25',
    comment: '15',
    imgList: [dummyGurbage[4], dummyGurbage[6], dummyGurbage[8]],
    comment1: 'Mohakhali',
    comment2: '50',
    commentPic1: '20',
    commentPic2: '25',
  ),
  Forum(
    id: '10',
    name: 'Ava Rodriguez',
    profilePic: "assets/images/propic13.png",
    question: 'What are some effective study techniques?',
    supportArea: 'Banani, Bangladesh',
    description: 'I am a student who has developed effective study techniques over the years.',
    location: 'Dholaikhaal',
    upvote: '65',
    downvote: '30',
    comment: '18',
    imgList: [dummyGurbage[10], dummyGurbage[2], dummyGurbage[3]],
    comment1: 'Mohakhali',
    comment2: '50',
    commentPic1: '20',
    commentPic2: '25',
  ),
];
