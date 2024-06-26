import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:waste_management/constants/theming.dart';
import 'package:waste_management/services/auth_service.dart';
import 'dart:async';

import 'package:waste_management/widgets/employeeFeatures/checkInout/checkin.dart';
import 'package:waste_management/widgets/employeeFeatures/taskList/taskListShow.dart';

class ConfirmationPage extends StatefulWidget {
  const ConfirmationPage({super.key});

  @override
  State<ConfirmationPage> createState() => _ConfirmationPageState();
}

class _ConfirmationPageState extends State<ConfirmationPage>
    with TickerProviderStateMixin {
  late final AnimationController _controller;
  final AuthServices authServices = AuthServices();

  @override
  void initState() {
    super.initState();
    authServices.checkIn(context: context, flag: true);
    _controller = AnimationController(vsync: this);
    Timer(Duration(seconds: 4), () {
      Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => const TaskListView())
      );
    });
  }



  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kPrimaryLightColor,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Lottie.asset(
              "assets/images/check.json",
              controller: _controller,
              onLoaded: (composition) {
                _controller
                  ..duration = composition.duration
                  ..forward();
              },
            ),
            Text("You are checked in", style: TextStyle(
              fontSize: 18,
              color: ksecondaryHeaderColor
            ),)
          ],
        ),
      ),
    );
  }
}