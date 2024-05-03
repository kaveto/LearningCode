# Datetime Module Part I
from datetime import datetime,timedelta
import calendar

now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))

testDate = now + timedelta(days=2) #two days ahead
myFirstLinkedinInCourse = now - timedelta(weeks=3) #three weeks ago
print(testDate.date())
print(myFirstLinkedinInCourse.date())

if testDate > myFirstLinkedinInCourse:
    print("testDate is after myFirstLinkedinInCourse")

cal = calendar.month(1995,11)
print(cal)

cal2 = calendar.weekday(1995, 11, 10)
print(cal2)