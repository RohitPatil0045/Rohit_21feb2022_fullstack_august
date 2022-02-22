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
#
# xor_result = 0
# for x in nums:
#     xor_result ^= x
#
# return xor_result


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


#
# def twoSum(nums, target):
#     n = len(nums)
#     for i in range(n):
#         for j in range(i + 1, n):
#             if nums[j] == target - nums[i]:
#                 return [i, j]
#
#
# print(twoSum( [2, 5, 6, 7], 8));


a = ['a', 'b', 'v', 'g']
# a[:]= a[-1:-5]
# print(a)
# s.reverse()

for i in range(len(a)):
    for j in range(i + 1, len(a)):
        print ([i,j])
    # for k in range(len(a)):
    #     print([i,k])
