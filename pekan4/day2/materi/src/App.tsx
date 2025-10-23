// // Boolean
// const isLoading: boolean = true;

// // Number
// const count: number = 42;
// const price: number = 99.99;

// // String
// const name: string = "mullyouknow";
// const message: string = `Hello, ${name}!`;

// // Array
// const numbers: number[] = [1, 2, 3, 4, 5];
// const names: Array<string> = ["Alice", "Bob", "Charlie"];

// // Tuple (array dengan tipe fixed length dan ordered)
// const person: [string, number] = ["Mullyouknow", 3];

// // Enum
// enum Status {
//   Pending = "PENDING",
//   InProgress = "IN_PROGRESS",
//   Completed = "COMPLETED"
// }

// const currentStatus: Status = Status.InProgress;

// // Any (hindari penggunaan kecuali sangat diperlukan)
// let data: any = "could be anything";


// // Interface untuk props komponen
// interface UserCardProps {
//   name: string;
//   age: number;
//   email?: string; // Optional property
//   status: Status;
//   hobbies: string[];
// }

// // Interface untuk state
// interface UserState {
//   user: {
//     id: number;
//     name: string;
//     email: string;
//   } | null;
//   isLoading: boolean;
//   error: string | null;
// }
// import React, { useState, useCallback, useMemo } from 'react';

// // Komponen dengan typed props dan events
// interface CounterProps {
//   initialCount?: number;
//   step?: number;
//   onCountChange?: (count: number) => void;
//   disabled?: boolean;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: 'admin' | 'user' | 'guest';
// }

// interface CounterState {
//   count: number;
//   isEven: boolean;
//   lastUpdated: Date | null;
// }

// const Counter: React.FC<CounterProps> = ({
//   initialCount = 0,
//   step = 1,
//   onCountChange,
//   disabled = false
// }) => {
//   const [state, setState] = useState<CounterState>({
//     count: initialCount,
//     isEven: initialCount % 2 === 0,
//     lastUpdated: null
//   });

//   const increment = useCallback((): void => {
//     if (disabled) return;

//     setState(prevState => {
//       const newCount = prevState.count + step;
//       const newState: CounterState = {
//         count: newCount,
//         isEven: newCount % 2 === 0,
//         lastUpdated: new Date()
//       };

//       onCountChange?.(newCount);
//       return newState;
//     });
//   }, [step, onCountChange, disabled]);

//   const decrement = useCallback((): void => {
//     if (disabled) return;

//     setState(prevState => {
//       const newCount = prevState.count - step;
//       const newState: CounterState = {
//         count: newCount,
//         isEven: newCount % 2 === 0,
//         lastUpdated: new Date()
//       };

//       onCountChange?.(newCount);
//       return newState;
//     });
//   }, [step, onCountChange, disabled]);

//   const reset = useCallback((): void => {
//     setState({
//       count: initialCount,
//       isEven: initialCount % 2 === 0,
//       lastUpdated: new Date()
//     });
//     onCountChange?.(initialCount);
//   }, [initialCount, onCountChange]);

//   // Computed values dengan useMemo
//   const displayInfo = useMemo((): string => {
//     const status = state.isEven ? 'Genap' : 'Ganjil';
//     const timeInfo = state.lastUpdated
//       ? ` (terakhir diupdate: ${state.lastUpdated.toLocaleTimeString()})`
//       : '';
//     return `${status}${timeInfo}`;
//   }, [state.isEven, state.lastUpdated]);

//   return (
//     <div>
//       <h2>Counter: {state.count}</h2>
//       <p>{displayInfo}</p>
//       <div>
//         <button onClick={increment} disabled={disabled}>
//           +{step}
//         </button>
//         <button onClick={decrement} disabled={disabled}>
//           -{step}
//         </button>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default Counter;


import React, { useState, useReducer } from 'react';

// Complex interfaces untuk real-world scenario
interface UserProfile {
  id: number;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;
  };
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    notifications: boolean;
    language: string;
  };
  stats: {
    loginCount: number;
    lastLogin: Date;
    accountCreated: Date;
  };
}

type UserAction =
  | { type: 'UPDATE_PROFILE'; payload: Partial<UserProfile['personalInfo']> }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<UserProfile['preferences']> }
  | { type: 'INCREMENT_LOGIN_COUNT' }
  | { type: 'RESET' };

const initialUser: UserProfile = {
  id: 1,
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  },
  preferences: {
    theme: 'light',
    notifications: true,
    language: 'id'
  },
  stats: {
    loginCount: 0,
    lastLogin: new Date(),
    accountCreated: new Date()
  }
};

function userReducer(state: UserProfile, action: UserAction): UserProfile {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload }
      };
    case 'UPDATE_PREFERENCES':
      return {
        ...state,
        preferences: { ...state.preferences, ...action.payload }
      };
    case 'INCREMENT_LOGIN_COUNT':
      return {
        ...state,
        stats: {
          ...state.stats,
          loginCount: state.stats.loginCount + 1,
          lastLogin: new Date()
        }
      };
    case 'RESET':
      return initialUser;
    default:
      return state;
  }
}

const UserProfile: React.FC = () => {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleProfileUpdate = (field: keyof UserProfile['personalInfo'], value: string): void => {
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: { [field]: value }
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {user.personalInfo.firstName} {user.personalInfo.lastName}</p>
        <p>Email: {user.personalInfo.email}</p>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={user.personalInfo.firstName}
              onChange={(e) => handleProfileUpdate('firstName', e.target.value)}
              placeholder="First Name"
            />
            <input
              type="email"
              value={user.personalInfo.email}
              onChange={(e) => handleProfileUpdate('email', e.target.value)}
              placeholder="Email"
            />
            <button onClick={() => setIsEditing(false)}>Save</button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        )}
      </div>

      <div>
        <h3>Preferences</h3>
        <p>Theme: {user.preferences.theme}</p>
        <p>Notifications: {user.preferences.notifications ? 'Enabled' : 'Disabled'}</p>
        <p>Language: {user.preferences.language}</p>
      </div>

      <div>
        <h3>Statistics</h3>
        <p>Login Count: {user.stats.loginCount}</p>
        <p>Last Login: {user.stats.lastLogin.toLocaleDateString()}</p>
        <p>Member Since: {user.stats.accountCreated.toLocaleDateString()}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT_LOGIN_COUNT' })}>
          Simulate Login
        </button>
      </div>
    </div>
  );
};

export default UserProfile;