<template>
  <v-row align="center" justify="center">
    <v-layout row justify-center align-center>
      <v-flex>
        <!-- <LoginModal v-if="!isLoggedIn" />
        <v-card class="d-flex pa-5">
          <v-row align="center" justify="center">
            <div class="text-center">
              <v-btn href="#/all" class="ma-1 subtitle-2" :color="visibility == 'all'? 'primary': 'success'">
                All Todods
                ( {{todos.length}} )
              </v-btn>
              <v-btn
                href="#/active"
                class="ma-2"
                :color="visibility == 'active'? 'primary': 'success'"
              >
                Active Todods
                ( {{remaining}} )
              </v-btn>
              <v-btn
                href="#/completed"
                class="ma-2"
                :color="visibility == 'completed'? 'primary': 'success'"
              >Completed Todos ( {{completedTodosCount}} )</v-btn>
              <v-progress-circular
                v-if="completedTodosCount > 0"
                :value="progress"
                class="mr-2"
                style="width:70px;height:70px;"
              ></v-progress-circular>
            </div>
          </v-row>
        </v-card>-->
        <!-- <v-card class="d-flex pa-1">
          <v-row align="center" justify="center">
            <div class="text-center">
              <v-col>
                <v-text-field
                  outlined
                  clearable
                  type="text"
                  autofocus
                  autocomplete="off"
                  placeholder="What needs to be done?"
                  v-model="newTodo"
                  @keyup.enter="addTodo"
                >
                  <template v-slot:append>
                    <v-fade-transition leave-absolute>
                      <v-progress-circular v-if="loading" size="24" color="info" indeterminate></v-progress-circular>
                      <v-icon>note_add</v-icon>
                    </v-fade-transition>
                  </template>
                </v-text-field>
              </v-col>
            </div>
          </v-row>
        </v-card>-->
        <v-card class="d-flex pa-12">
          <v-row justify="space-around">
            <v-list>
              <v-list-item>
                <!-- <v-col cols="12" sm="6"> -->
                <v-text-field
                  outlined
                  clearable
                  type="text"
                  autofocus
                  autocomplete="off"
                  placeholder="What needs to be done?"
                  v-model="newTodo"
                  @keyup.enter="addTodo"
                >
                  <template v-slot:append>
                    <v-fade-transition leave-absolute>
                      <v-progress-circular v-if="loading" size="24" color="info" indeterminate></v-progress-circular>
                      <v-icon>note_add</v-icon>
                    </v-fade-transition>
                  </template>
                </v-text-field>
                <!-- </v-col> -->
              </v-list-item>
            </v-list>
            <v-list subheader style="width: 100% !important">
              <draggable
                v-model="todos"
                group="todos"
                @start="drag=true"
                @end="drag=false"
                :move="checkMove"
              >
                <v-list-item v-for="todo in todos" :key="todo._id">
                  <v-list-item-avatar>
                    <v-checkbox v-model="todo.isCompleted" @change="updateTodo(todo, true)"></v-checkbox>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      v-if="todo.title"
                      class="body-2"
                      v-bind:class="{'strike-through': todo.isCompleted}"
                      v-text="todo.title"
                    ></v-list-item-title>
                    <v-list-item-title></v-list-item-title>
                  </v-list-item-content>

                  <!-- <v-list-item-icon>
                    <v-btn color="primary" depressed @click="editTodo(todo); updateDialog = true;">
                      <v-icon>create</v-icon>
                    </v-btn>&nbsp;&nbsp;
                    <v-btn color="primary" depressed @click.stop="dialog = true; targetTodo = todo">
                      <v-icon>delete_forever</v-icon>
                    </v-btn>
                  </v-list-item-icon>-->
                </v-list-item>
              </draggable>
            </v-list>
            <!-- <v-simple-table style="width:100%;" fixed-header>
            <tbody>
              <tr v-for="todo in filteredTodos" :key="todo._id">
                <td>
                  <v-checkbox v-model="todo.isCompleted" @change="updateTodo(todo, true)"></v-checkbox>
                </td>
                <td v-bind:class="{'strike-through': todo.isCompleted}">{{ todo.title }}</td>
                <td class="text-right">
                  <v-btn
                    v-if="!todo.isCompleted"
                    color="primary"
                    depressed
                    @click="editTodo(todo); updateDialog = true;"
                  >
                  <v-icon>create</v-icon>
                  </v-btn>&nbsp;&nbsp;
                  <v-btn
                    color="primary"
                    depressed
                    @click.stop="dialog = true; targetTodo = todo"
                  >
                  <v-icon>delete_forever</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
            </v-simple-table>-->
            <!-- <v-dialog v-if="updateDialog" v-model="updateDialog" persistent max-width="600px">
              <v-card>
                <v-card-title>
                  <span class="headline">Update Todo</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field v-model="editedTodo.title" label="Todo*" required></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="updateDialog = false">Close</v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="doneEdit(editedTodo); updateDialog = false;"
                  >Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>-->
            <!-- <v-dialog v-model="dialog" max-width="290">
              <v-card>
                <v-card-title class="headline">Do you want to Delete?</v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

                  <v-btn
                    color="green darken-1"
                    text
                    @click="removeTodo(targetTodo);dialog = false"
                  >Agree</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>-->
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-row>
</template>
<style scoped>
.strike-through {
  text-decoration: line-through;
}
</style>


<script>
import {
  TODO_LIST_QUERY,
  TODO_ADD_MUTATION,
  TODO_UPDATE_MUTATION,
  TODO_DELETE_MUTATION
} from "../gql/todo.gql";
// visibility filters
import draggable from "vuedraggable";
import LoginModal from "./login.vue";
import { setTimeout } from "timers";

const filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter(todo => !todo.isCompleted);
  },
  completed(todos) {
    return todos.filter(todo => todo.isCompleted);
  }
};

export default {
  order: 0,
  name: "Home",
  data() {
    return {
      loading: false,
      targetTodo: "",
      updateDialog: false,
      dialog: false,
      isLoggedIn: this.isLogged(),
      showModal: false,
      todos: [],
      newTodo: "",
      editedTodo: null,
      visibility: "all",
      drag: false
    };
  },
  components: {
    // LoginModal,
    draggable
  },

  // computed: {
  //   progress() {
  //     return (filters.completed(this.todos).length / this.todos.length) * 100;
  //   },
  //   filteredTodos: {
  //     get() {
  //       return filters[this.visibility](this.todos);
  //     },
  //     set() {
  //       console.log(this.filteredTodos);
  //     }
  //   },
  //   remaining() {
  //     return filters.active(this.todos).length;
  //   },
  //   completedTodosCount() {
  //     return filters.completed(this.todos).length;
  //   },
  //   allDone: {
  //     get() {
  //       return this.remaining === 0;
  //     },
  //     set(value) {
  //       this.todos.forEach(todo => {
  //         todo.isCompleted = value;
  //       });
  //     }
  //   }
  // },

  // filters: {
  //   pluralize(n) {
  //     return n === 1 ? "todo" : "todods";
  //   }
  // },

  methods: {
    checkMove(e) {
      window.console.log(e.draggedContext);
    },
    // onHashChange() {
    //   const visibility = window.location.hash.replace(/#\/?/, "");
    //   if (filters[visibility]) {
    //     this.visibility = visibility;
    //   } else {
    //     window.location.hash = "";
    //     this.visibility = "all";
    //   }
    // },
    isLogged() {
      if (localStorage.token) {
        return true;
      }
      return false;
    },
    fetchTodo() {
      return this.$apollo
        .query({
          query: TODO_LIST_QUERY,
          variables: {
            first: 50,
            offset: 1
          }
        })
        .then(response => {
          this.todos = response.data.todoList.data;
        });
    },
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.loading = true;
      const postBody = {
        title: value
      };
      return this.$apollo
        .mutate({
          mutation: TODO_ADD_MUTATION,
          variables: {
            input: postBody
          },
          refetchQueries: [
            {
              query: TODO_LIST_QUERY,
              variables: {
                first: 50,
                offset: 1
              }
            }
          ]
        })
        .then(data => {
          this.newTodo = "";
          this.loading = false;
          // setTimeout(function(){
          //   this.loading = false;
          // }, 1000)
          this.fetchTodo();
        });
    }

    // removeTodo(todo) {
    //   const todoId = todo._id;
    //    return this.$apollo
    //     .mutate({
    //       mutation: TODO_DELETE_MUTATION,
    //       variables: {
    //         id: todoId
    //       },
    //       refetchQueries: [
    //         {
    //           query: TODO_LIST_QUERY
    //         }
    //       ]
    //     })
    //     .then(data => {
    //       this.newTodo = "";
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },

    // editTodo(todo) {
    //   this.beforeEditCache = todo.title;
    //   this.editedTodo = { ...todo };
    // },

    // doneEdit(todo) {
    //   if (!this.editedTodo) {
    //     return;
    //   }
    //   this.editedTodo = null;
    //   todo.title = todo.title.trim();
    //   if (!todo.title) {
    //     this.removeTodo(todo);
    //   }
    //   this.updateTodo(todo);
    // },

    // updateTodo(todo) {
    //   const todoId = todo._id;
    //   const isCompleted = !!todo.isCompleted;
    //   const postBody = {
    //     title: todo.title,
    //     isCompleted
    //   };
    //   return this.$apollo
    //     .mutate({
    //       mutation: TODO_UPDATE_MUTATION,
    //       variables: {
    //         id: todoId,
    //         input: postBody
    //       },
    //       refetchQueries: [
    //         {
    //           query: TODO_LIST_QUERY
    //         }
    //       ]
    //     })
    //     .then(data => {
    //       this.newTodo = "";
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },

    // cancelEdit(todo) {
    //   this.editedTodo = null;
    //   todo.title = this.beforeEditCache;
    // },

    // removeCompleted() {
    //   this.completedTodos = filters.completed(this.todos);
    //   this.completedTodos.forEach(todo => {
    //     this.removeTodo(todo);
    //   });
    //   this.todos = filters.active(this.todos);
    // }
  },

  // directives: {
  //   "todo-focus": function(el, binding) {
  //     if (binding.value) {
  //       el.focus();
  //     }
  //   }
  // },
  created() {
    if (this.isLoggedIn) {
      this.fetchTodo();
    }
    // window.addEventListener("hashchange", this.onHashChange);
    // this.onHashChange();
  }
};
</script>
