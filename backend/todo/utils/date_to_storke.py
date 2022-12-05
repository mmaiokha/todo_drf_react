from datetime import datetime


def date_to_stroke(d=datetime.today().date(), weekday=datetime.today().weekday()):
    months = {
        '1': "January",
        '2': "February",
        '3': "March",
        '4': "April",
        '5': "May",
        '6': "June",
        '7': "July",
        '8': "August",
        '9': "September",
        '10': "October",
        '11': "November",
        '12': "December",
    }

    weekdays = {
        '0': "Monday",
        '1': "Tuesday",
        '2': 'Wednesday',
        '3': 'Thursday',
        '4': "Friday",
        '5': 'Saturday',
        '6': 'Sunday'
    }

    d = str(d).split('-')
    return f'{weekdays[str(weekday)]}, {months[d[1]]} {d[2]}, {d[0]}'
