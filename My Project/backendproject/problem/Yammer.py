# a = "Hey fellow warriors"
# output = ""
# for i in (a.split(' ')):
#     if len(i) >= 5:
#         b = i[::-1]
#         output += b + ' '
#
#     else:
#         output += i + ' '
#
# print(output)


# def spinword(a):
#     output = ""
#     for i in (a.split(' ')):
#
#         if len(i) >= 5:
#             b = i[::-1]
#             output += b + ' '
#
#         else:
#             output += i + ' '
#     return print(output)
#
#
# spinword("Hey wollef sroirraw")

# a = 'Boy is playing Cricket'
# output = ''
# for i in (a.split(' ')):
#     if len(i) >= 5:
#         b = i[::-1]
#         output += b + ' '
#
#     else:
#         output += i + ' '
#
# print(output)
import self as self
import target as target


def twoSum(nums, target):
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[j] == target - nums[i]:
                return [i, j]


print(twoSum( [2, 5, 6, 7], 8));
