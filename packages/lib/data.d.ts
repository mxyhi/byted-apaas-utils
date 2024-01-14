interface _department {
  /**
   * 对象名称：部门 / Department
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：部门 / Department
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：部门 / Department
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：部门 / Department
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：部门 / Department
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：部门 / Department
   *
   * 名称：名称 / Name
   *
   * 描述：--
   *
   * 类型：多语文本 / Multilingual
   *
   * 格式：{language_code: 1033 | 2052, text: string}[]
   */
  _name: { language_code: 1033 | 2052; text: string }[];

  /**
   * 对象名称：部门 / Department
   *
   * 名称：上级部门 / Parent department
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_department
   */
  _superior: _department;

  /**
   * 对象名称：部门 / Department
   *
   * 名称：负责人 / Manager
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _manager: _user;

  /**
   * 对象名称：部门 / Department
   *
   * 名称：状态 / Status
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  _status: '_active' | '_inactive';
}
interface _user {
  /**
   * 对象名称：用户 / User
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：用户 / User
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：用户 / User
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：用户 / User
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：用户 / User
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：用户 / User
   *
   * 名称：姓名 / Name
   *
   * 描述：--
   *
   * 类型：多语文本 / Multilingual
   *
   * 格式：{language_code: 1033 | 2052, text: string}[]
   */
  _name: { language_code: 1033 | 2052; text: string }[];

  /**
   * 对象名称：用户 / User
   *
   * 名称：启用账号密码 / Enable account and password
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  _enableAccountPassword: boolean;

  /**
   * 对象名称：用户 / User
   *
   * 名称：手机号码 / Mobile number
   *
   * 描述：--
   *
   * 类型：手机号码 / Mobile Number
   *
   * 格式：{key: string, code: string, number: string}
   */
  _phoneNumber: { key: string; code: string; number: string };

  /**
   * 对象名称：用户 / User
   *
   * 名称：邮箱 / Email
   *
   * 描述：--
   *
   * 类型：邮箱 / Email
   *
   * 格式：string
   */
  _email: string;

  /**
   * 对象名称：用户 / User
   *
   * 名称：头像 / Avatar
   *
   * 描述：--
   *
   * 类型：头像Avatar / 标识Logo
   *
   * 格式：{color: string, color_id: string, content: Multilingual, image: object, source: string}
   */
  _avatar: {
    color: string;
    color_id: string;
    content: { language_code: 1033 | 2052; text: string }[];
    image: object;
    source: string;
  };

  /**
   * 对象名称：用户 / User
   *
   * 名称：激活状态 / Active
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  _active: boolean;

  /**
   * 对象名称：用户 / User
   *
   * 名称：部门 / Department
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_department
   */
  _department: _department;

  /**
   * 对象名称：用户 / User
   *
   * 名称：类型 / Type
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  _type: '_employee' | '_externalUser';

  /**
   * 对象名称：用户 / User
   *
   * 名称：账号状态 / Account status
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  _accountStatus: '_used' | '_unused';

  /**
   * 对象名称：用户 / User
   *
   * 名称：上级 / Manager
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _manager: _user;

  /**
   * 对象名称：用户 / User
   *
   * 名称：入职时间 / Date of Employment
   *
   * 描述：--
   *
   * 类型：日期 / Date
   *
   * 格式：string
   */
  _joinTime: string;

  /**
   * 对象名称：用户 / User
   *
   * 名称：国家/地区 / Country/Region
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_country
   */
  _country: any;

  /**
   * 对象名称：用户 / User
   *
   * 名称：职务 / Job Title
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  _jobTitle: string;

  /**
   * 对象名称：用户 / User
   *
   * 名称：别名 / Alias
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  _nickname: string;

  /**
   * 对象名称：用户 / User
   *
   * 名称：工位 / Seat ID
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  _workStation: string;

  /**
   * 对象名称：用户 / User
   *
   * 名称：城市 / City
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  _city: string;

  /**
   * 对象名称：用户 / User
   *
   * 名称：工号 / Employee ID
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  _employeeNo: string;

  /**
   * 对象名称：用户 / User
   *
   * 名称：性别 / Gender
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  _gender: '_male' | '_female' | '_secret';
}
interface coach_area {
  /**
   * 对象名称：教练区
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：教练区
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：教练区
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：教练区
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：教练区
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：教练区
   *
   * 名称：教练
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  coach: _user;

  /**
   * 对象名称：教练区
   *
   * 名称：区域名称
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  name: string;

  /**
   * 对象名称：教练区
   *
   * 名称：排序 / Integer
   *
   * 描述：--
   *
   * 类型：整数 / Bigint
   *
   * 格式：string
   */
  sort: string;
}
interface course {
  /**
   * 对象名称：课程
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：课程
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：课程
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：课程
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：课程
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：课程
   *
   * 名称：标题
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  title: string;

  /**
   * 对象名称：课程
   *
   * 名称：描述
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  description: string;

  /**
   * 对象名称：课程
   *
   * 名称：是否有效
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  valid: boolean;

  /**
   * 对象名称：课程
   *
   * 名称：封面
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  picture: string;

  /**
   * 对象名称：课程
   *
   * 名称：版本
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  version: string;

  /**
   * 对象名称：课程
   *
   * 名称：课程ID
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  course_id: string;

  /**
   * 对象名称：课程
   *
   * 名称：课件数量
   *
   * 描述：--
   *
   * 类型：整数 / Bigint
   *
   * 格式：string
   */
  courseware_num: string;

  /**
   * 对象名称：课程
   *
   * 名称：考试数量
   *
   * 描述：--
   *
   * 类型：整数 / Bigint
   *
   * 格式：string
   */
  examination_num: string;

  /**
   * 对象名称：课程
   *
   * 名称：考核数量
   *
   * 描述：--
   *
   * 类型：整数 / Bigint
   *
   * 格式：string
   */
  assessment_num: string;
}
interface course_for_group {
  /**
   * 对象名称：课程和课程分组绑定
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：课程和课程分组绑定
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：课程和课程分组绑定
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：课程和课程分组绑定
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：课程和课程分组绑定
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：课程和课程分组绑定
   *
   * 名称：课程分组
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：course_group
   */
  course_group: course_group;

  /**
   * 对象名称：课程和课程分组绑定
   *
   * 名称：课程
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：course
   */
  course: course;

  /**
   * 对象名称：课程和课程分组绑定
   *
   * 名称：有效状态
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  status: boolean;

  /**
   * 对象名称：课程和课程分组绑定
   *
   * 名称：同步id
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  sync_id: string;
}
interface course_for_group_post {
  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：课程分组 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：course_group
   */
  course_group: course_group;

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：课程 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：course
   */
  course: course;

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：状态 / Boolean
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  status: boolean;

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：职务 / Option
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  ncc_post:
    | 'store_manager_post'
    | 'option_0d3a8d50df0'
    | 'option_3a8d50df06f'
    | 'lobby_manger_post'
    | 'kitchen_manger_post'
    | 'option_8d50df06f75'
    | 'option_7501fba93d4'
    | 'option_50df06f7547'
    | 'option_df06f7547d2'
    | 'option_547d2a607b5'
    | 'option_f7547d2a607'
    | 'option_06f7547d2a6'
    | 'option_7d2a607b5e1'
    | 'option_2a607b5e13a'
    | 'option_607b5e13afc'
    | 'option_7b5e13afc52'
    | 'reception_post'
    | 'option_5e13afc52fa'
    | 'option_8523e987bc2';

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：部门 / Option
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  department:
    | 'option_949679243e0'
    | 'option_49679243e01'
    | 'option_856fc1d8c00'
    | 'option_c1d8c00ed2c'
    | 'option_c00ed2c04b2'
    | 'option_d2c04b24a64';

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：是否全体必学 / Boolean
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  is_all: boolean;

  /**
   * 对象名称：课程分组中岗位必学课程
   *
   * 名称：同步id / Text
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  sync_id: string;
}
interface course_group {
  /**
   * 对象名称：课程分组
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：课程分组
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：课程分组
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：课程分组
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：课程分组
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：课程分组
   *
   * 名称：分组名称
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  name: string;

  /**
   * 对象名称：课程分组
   *
   * 名称：有效状态
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  status: boolean;

  /**
   * 对象名称：课程分组
   *
   * 名称：分组id
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  group_id: string;
}
interface course_group_rule {
  /**
   * 对象名称：课程分组规则
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：课程分组规则
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：课程分组规则
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：课程分组规则
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：课程分组规则
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：课程分组规则
   *
   * 名称：课程分组
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：course_group
   */
  course_group: course_group;

  /**
   * 对象名称：课程分组规则
   *
   * 名称：有效状态
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  status: boolean;

  /**
   * 对象名称：课程分组规则
   *
   * 名称：同步id
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  sync_id: string;

  /**
   * 对象名称：课程分组规则
   *
   * 名称：NCC职务
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  ncc_post:
    | 'store_manager_post'
    | 'option_0d3a8d50df0'
    | 'option_3a8d50df06f'
    | 'lobby_manger_post'
    | 'kitchen_manger_post'
    | 'option_8d50df06f75'
    | 'option_7501fba93d4'
    | 'option_50df06f7547'
    | 'option_df06f7547d2'
    | 'option_547d2a607b5'
    | 'option_f7547d2a607'
    | 'option_06f7547d2a6'
    | 'option_7d2a607b5e1'
    | 'option_2a607b5e13a'
    | 'option_607b5e13afc'
    | 'option_7b5e13afc52'
    | 'reception_post'
    | 'option_5e13afc52fa'
    | 'option_8523e987bc2';

  /**
   * 对象名称：课程分组规则
   *
   * 名称：NCC职级
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  ncc_rank:
    | 'store_manager'
    | 'pre_store_manager'
    | 'front_office_manager'
    | 'kitchen_manager'
    | 'option_e5430d3a8d5'
    | 'option_a0ab3ba9137'
    | 'option_430d3a8d50d'
    | 'two_star'
    | 'one_star';

  /**
   * 对象名称：课程分组规则
   *
   * 名称：算薪方式
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  salary_type: 'monthly' | 'daily' | 'hourly';

  /**
   * 对象名称：课程分组规则
   *
   * 名称：用工类型
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  employment_type: 'full' | 'part';
}
interface course_study_plan {
  /**
   * 对象名称：课程学习计划
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：有效状态
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  valid: boolean;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：课件数量
   *
   * 描述：--
   *
   * 类型：整数 / Bigint
   *
   * 格式：string
   */
  courseware_num: string;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：课件完成数量
   *
   * 描述：--
   *
   * 类型：整数 / Bigint
   *
   * 格式：string
   */
  courseware_finish_num: string;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：考试数量
   *
   * 描述：--
   *
   * 类型：整数 / Bigint
   *
   * 格式：string
   */
  examination_num: string;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：考试通过数量
   *
   * 描述：--
   *
   * 类型：整数 / Bigint
   *
   * 格式：string
   */
  examination_pass_num: string;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：考核数量
   *
   * 描述：--
   *
   * 类型：整数 / Bigint
   *
   * 格式：string
   */
  assessment_num: string;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：考核通过数量
   *
   * 描述：--
   *
   * 类型：整数 / Bigint
   *
   * 格式：string
   */
  assessment_pass_num: string;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：开始时间
   *
   * 描述：--
   *
   * 类型：日期 / Date
   *
   * 格式：string
   */
  start_time: string;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：结束时间
   *
   * 描述：--
   *
   * 类型：日期 / Date
   *
   * 格式：string
   */
  end_time: string;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：学习计划状态
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  status: 'notStarted' | 'inProgress' | 'completed' | 'invalidated';

  /**
   * 对象名称：课程学习计划
   *
   * 名称：课程
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：course
   */
  course: course;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：员工
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：employee
   */
  employee: employee;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：课程计划数量总数
   *
   * 描述：--
   *
   * 类型：公式 / Formula
   *
   * 格式：any
   */
  totalCoursePlan: any;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：课程计划已完成总数
   *
   * 描述：--
   *
   * 类型：公式 / Formula
   *
   * 格式：any
   */
  totalCoursePlanCompleted: any;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：添加时员工的职级
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  employeeRankWhenAdd:
    | 'store_manager'
    | 'pre_store_manager'
    | 'front_office_manager'
    | 'kitchen_manager'
    | 'option_e5430d3a8d5'
    | 'option_a0ab3ba9137'
    | 'option_430d3a8d50d'
    | 'two_star'
    | 'one_star';

  /**
   * 对象名称：课程学习计划
   *
   * 名称：任职记录 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：employment_record
   */
  employment_record: employment_record;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：删除类型 / Option
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  delete_type: 'delete' | 'entry' | 'depart' | 'change_store' | 'downgrading';

  /**
   * 对象名称：课程学习计划
   *
   * 名称：所属门店 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：store
   */
  store: store;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：完成时间 / DateTime
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  done_time: number;

  /**
   * 对象名称：课程学习计划
   *
   * 名称：完成类型 / Formula
   *
   * 描述：--
   *
   * 类型：公式 / Formula
   *
   * 格式：any
   */
  done_type: any;
}
interface employee {
  /**
   * 对象名称：员工
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：员工
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：员工
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：员工
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：员工
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：员工
   *
   * 名称：姓名
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  name: string;

  /**
   * 对象名称：员工
   *
   * 名称：巴奴工号
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  job_num: string;

  /**
   * 对象名称：员工
   *
   * 名称：电话
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  phone_number: string;

  /**
   * 对象名称：员工
   *
   * 名称：有效状态
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  status: boolean;

  /**
   * 对象名称：员工
   *
   * 名称：门店
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：store
   */
  store: store;

  /**
   * 对象名称：员工
   *
   * 名称：系统用户
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  user: _user;

  /**
   * 对象名称：员工
   *
   * 名称：NCC职级
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  ncc_rank:
    | 'store_manager'
    | 'pre_store_manager'
    | 'front_office_manager'
    | 'kitchen_manager'
    | 'option_e5430d3a8d5'
    | 'option_a0ab3ba9137'
    | 'option_430d3a8d50d'
    | 'two_star'
    | 'one_star';

  /**
   * 对象名称：员工
   *
   * 名称：NCC职务
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  ncc_post:
    | 'store_manager_post'
    | 'option_0d3a8d50df0'
    | 'option_3a8d50df06f'
    | 'lobby_manger_post'
    | 'kitchen_manger_post'
    | 'option_8d50df06f75'
    | 'option_7501fba93d4'
    | 'option_50df06f7547'
    | 'option_df06f7547d2'
    | 'option_547d2a607b5'
    | 'option_f7547d2a607'
    | 'option_06f7547d2a6'
    | 'option_7d2a607b5e1'
    | 'option_2a607b5e13a'
    | 'option_607b5e13afc'
    | 'option_7b5e13afc52'
    | 'reception_post'
    | 'option_5e13afc52fa'
    | 'option_8523e987bc2';

  /**
   * 对象名称：员工
   *
   * 名称：算薪方式
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  salary_type: 'monthly' | 'daily' | 'hourly';

  /**
   * 对象名称：员工
   *
   * 名称：用工类型
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  employment_type: 'full' | 'part';

  /**
   * 对象名称：员工
   *
   * 名称：部门 / Option
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  department:
    | 'option_949679243e0'
    | 'option_49679243e01'
    | 'option_856fc1d8c00'
    | 'option_c1d8c00ed2c'
    | 'option_c00ed2c04b2'
    | 'option_d2c04b24a64';

  /**
   * 对象名称：员工
   *
   * 名称：任职记录 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：employment_record
   */
  employment_record: employment_record;

  /**
   * 对象名称：员工
   *
   * 名称：异动时间 / DateTime
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  movement_time: number;

  /**
   * 对象名称：员工
   *
   * 名称：晋升通道 / Formula
   *
   * 描述：--
   *
   * 类型：公式 / Formula
   *
   * 格式：any
   */
  is_formal: any;

  /**
   * 对象名称：员工
   *
   * 名称：是否异动 / Formula
   *
   * 描述：--
   *
   * 类型：公式 / Formula
   *
   * 格式：any
   */
  is_movement: any;

  /**
   * 对象名称：员工
   *
   * 名称：师傅异动时间 / DateTime
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  master_movement_time: number;

  /**
   * 对象名称：员工
   *
   * 名称：是否师傅异动 / Formula
   *
   * 描述：--
   *
   * 类型：公式 / Formula
   *
   * 格式：any
   */
  is_master_movement: any;
}
interface employment_record {
  /**
   * 对象名称：任职记录
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：任职记录
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：任职记录
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：任职记录
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：任职记录
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：任职记录
   *
   * 名称：员工 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：employee
   */
  employee: employee;

  /**
   * 对象名称：任职记录
   *
   * 名称：门店 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：store
   */
  store: store;

  /**
   * 对象名称：任职记录
   *
   * 名称：岗位 / Option
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  ncc_post:
    | 'store_manager_post'
    | 'option_0d3a8d50df0'
    | 'option_3a8d50df06f'
    | 'lobby_manger_post'
    | 'kitchen_manger_post'
    | 'option_8d50df06f75'
    | 'option_7501fba93d4'
    | 'option_50df06f7547'
    | 'option_df06f7547d2'
    | 'option_547d2a607b5'
    | 'option_f7547d2a607'
    | 'option_06f7547d2a6'
    | 'option_7d2a607b5e1'
    | 'option_2a607b5e13a'
    | 'option_607b5e13afc'
    | 'option_7b5e13afc52'
    | 'reception_post'
    | 'option_5e13afc52fa'
    | 'option_8523e987bc2';

  /**
   * 对象名称：任职记录
   *
   * 名称：部门 / Option
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  department:
    | 'option_949679243e0'
    | 'option_49679243e01'
    | 'option_856fc1d8c00'
    | 'option_c1d8c00ed2c'
    | 'option_c00ed2c04b2'
    | 'option_d2c04b24a64';

  /**
   * 对象名称：任职记录
   *
   * 名称：用工类型 / Option
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  employment_type: 'full' | 'part';

  /**
   * 对象名称：任职记录
   *
   * 名称：算薪方式 / Option
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  salary_type: 'monthly' | 'daily' | 'hourly';

  /**
   * 对象名称：任职记录
   *
   * 名称：职级 / Option
   *
   * 描述：--
   *
   * 类型：选项 / Option
   *
   * 格式：optionApiName
   */
  ncc_rank:
    | 'store_manager'
    | 'pre_store_manager'
    | 'front_office_manager'
    | 'kitchen_manager'
    | 'option_e5430d3a8d5'
    | 'option_a0ab3ba9137'
    | 'option_430d3a8d50d'
    | 'two_star'
    | 'one_star';
}
interface mentoring_relationship {
  /**
   * 对象名称：师徒关系
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：师徒关系
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：师徒关系
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：师徒关系
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：师徒关系
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：师徒关系
   *
   * 名称：师傅
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：employee
   */
  master: employee;

  /**
   * 对象名称：师徒关系
   *
   * 名称：学员
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：employee
   */
  apprentice: employee;

  /**
   * 对象名称：师徒关系
   *
   * 名称：是否有效 / Boolean
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  status: boolean;

  /**
   * 对象名称：师徒关系
   *
   * 名称：学员系统用户 / Formula
   *
   * 描述：--
   *
   * 类型：公式 / Formula
   *
   * 格式：any
   */
  apprentice_system_user: any;

  /**
   * 对象名称：师徒关系
   *
   * 名称：师傅系统用户 / Formula
   *
   * 描述：--
   *
   * 类型：公式 / Formula
   *
   * 格式：any
   */
  master_system_user: any;

  /**
   * 对象名称：师徒关系
   *
   * 名称：师傅任职记录 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：employment_record
   */
  master_employment_record: employment_record;

  /**
   * 对象名称：师徒关系
   *
   * 名称：学员任职记录 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：employment_record
   */
  apprentice_employment_record: employment_record;

  /**
   * 对象名称：师徒关系
   *
   * 名称：所属门店 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：store
   */
  store: store;
}
interface notification_record {
  /**
   * 对象名称：通知记录
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：通知记录
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：通知记录
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：通知记录
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：通知记录
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：通知记录
   *
   * 名称：关联对象
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  lookup_b675f754790: _user;
}
interface store {
  /**
   * 对象名称：门店
   *
   * 名称：创建时间 / Created at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _createdAt: number;

  /**
   * 对象名称：门店
   *
   * 名称：创建人 / Created by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _createdBy: _user;

  /**
   * 对象名称：门店
   *
   * 名称：ID / ID
   *
   * 描述：--
   *
   * 类型：数字 / Number
   *
   * 格式：number
   */
  _id: number;

  /**
   * 对象名称：门店
   *
   * 名称：更新时间 / Updated at
   *
   * 描述：--
   *
   * 类型：日期时间 / DateTime
   *
   * 格式：number
   */
  _updatedAt: number;

  /**
   * 对象名称：门店
   *
   * 名称：更新人 / Updated by
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：_user
   */
  _updatedBy: _user;

  /**
   * 对象名称：门店
   *
   * 名称：NCC部门ID
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  ncc_id: string;

  /**
   * 对象名称：门店
   *
   * 名称：门店名称
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  name: string;

  /**
   * 对象名称：门店
   *
   * 名称：有效状态
   *
   * 描述：--
   *
   * 类型：布尔 / Boolean
   *
   * 格式：boolean
   */
  status: boolean;

  /**
   * 对象名称：门店
   *
   * 名称：天子星门店ID
   *
   * 描述：--
   *
   * 类型：文本 / Text
   *
   * 格式：string
   */
  store_id: string;

  /**
   * 对象名称：门店
   *
   * 名称：所属教练区 / Lookup
   *
   * 描述：--
   *
   * 类型：查找 / Lookup
   *
   * 格式：coach_area
   */
  coacharea: coach_area;
}

export declare interface metadataMap {
  _department: _department;
  _user: _user;
  coach_area: coach_area;
  course: course;
  course_for_group: course_for_group;
  course_for_group_post: course_for_group_post;
  course_group: course_group;
  course_group_rule: course_group_rule;
  course_study_plan: course_study_plan;
  employee: employee;
  employment_record: employment_record;
  mentoring_relationship: mentoring_relationship;
  notification_record: notification_record;
  store: store;
}

export declare type globalVariablesMap = {};
export declare type globalVariables = keyof globalVariablesMap;
